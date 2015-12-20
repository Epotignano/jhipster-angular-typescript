package cl.onesnap.springtest.web.rest.controllers;

import org.springframework.web.bind.annotation.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import cl.onesnap.springtest.service.crud.User2CRUDService;
import javax.inject.Inject;
import cl.onesnap.springtest.web.rest.mapper.User2Mapper;
import org.springframework.http.ResponseEntity;
import org.springframework.http.MediaType;
import com.codahale.metrics.annotation.Timed;
import cl.onesnap.springtest.web.rest.util.HeaderUtil;
import cl.onesnap.springtest.domain.User2;
import cl.onesnap.springtest.web.rest.dto.User2DTO;
import java.net.URISyntaxException;
import javax.validation.Valid;
import java.net.URI;
import java.util.List;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Page;
import cl.onesnap.springtest.web.rest.util.PaginationUtil;
import java.util.stream.Collectors;
import java.util.LinkedList;
import java.util.Optional;


/**
 * REST controller for managing User2.
 * 
 * @author OneSnap
 */
@RestController
@RequestMapping("/api")
public class User2Controller extends ApiBaseController {

    private final Logger log = LoggerFactory.getLogger(User2Controller.class);

    @Inject
    private User2CRUDService user2CRUDService;

    @Inject
    private User2Mapper user2Mapper;

    /**
     * POST  /user2 -> Create a new User2.
     */
    @RequestMapping(value = "/user2", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    @Timed
    public ResponseEntity<User2DTO> createUser2(@Valid @RequestBody User2DTO user2DTO) throws URISyntaxException {
        log.debug("REST request to save User2 : {}", user2DTO);
        User2 result = user2CRUDService.createUser2(user2DTO);;
        return ResponseEntity.created(new URI("/api/user2/" + result.getId()))
                 .headers(HeaderUtil.createEntityCreationAlert("user2", result.getId().toString()))
                 .body(user2Mapper.user2ToUser2DTO(result));
    }

    /**
     * PUT  /user2 -> Updates an existing User2.
     */
    @RequestMapping(value = "/user2", method = RequestMethod.PUT, produces = MediaType.APPLICATION_JSON_VALUE)
    @Timed
    public ResponseEntity<User2DTO> updateUser2(@Valid @RequestBody User2DTO user2DTO) throws URISyntaxException {
        log.debug("REST request to update User2 : {}", user2DTO);
        User2 result = user2CRUDService.updateUser2(user2DTO);;
        return ResponseEntity.ok()
                 .headers(HeaderUtil.createEntityUpdateAlert("user2", result.getId().toString()))
                 .body(user2Mapper.user2ToUser2DTO(result));
    }

    /**
     * GET  /user2 -> get all the User2.
     */
    @RequestMapping(value = "/user2", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    @Timed
    public ResponseEntity<List<User2DTO>> getAllUser2s(Pageable pageable) throws URISyntaxException {
        Page<User2> page = user2CRUDService.getAllUser2s(pageable);
        HttpHeaders headers = PaginationUtil.generatePaginationHttpHeaders(page, "/api/user2");
        return new ResponseEntity<>(page.getContent().stream()
                .map(user2Mapper::user2ToUser2DTO)
                .collect(Collectors.toCollection(LinkedList::new)), headers, HttpStatus.OK);
    }

    /**
     * GET  /user2/:id -> get the "id" User2.
     */
    @RequestMapping(value = "/user2/{id}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    @Timed
    public ResponseEntity<User2DTO> getUser2(@PathVariable Long id) {
        log.debug("REST request to get User2 : {}", id);;
        return Optional.ofNullable(user2CRUDService.getUser2(id))
            .map(user2Mapper::user2ToUser2DTO)
            .map(user2DTO -> new ResponseEntity<>(
                user2DTO,
                HttpStatus.OK))
            .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    /**
     * DELETE  /user2/:id -> delete the "id" User2.
     */
    @RequestMapping(value = "/user2/{id}", method = RequestMethod.DELETE, produces = MediaType.APPLICATION_JSON_VALUE)
    @Timed
    public ResponseEntity<Void> deleteUser2(@PathVariable Long id) {
        user2CRUDService.deleteUser2(id);
        return ResponseEntity.ok().headers(HeaderUtil.createEntityDeletionAlert("user2", id.toString())).build();
    }
}