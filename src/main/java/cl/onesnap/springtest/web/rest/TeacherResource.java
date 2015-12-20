package cl.onesnap.springtest.web.rest;

import com.codahale.metrics.annotation.Timed;
import cl.onesnap.springtest.domain.Teacher;
import cl.onesnap.springtest.repository.TeacherRepository;
import cl.onesnap.springtest.repository.search.TeacherSearchRepository;
import cl.onesnap.springtest.web.rest.util.HeaderUtil;
import cl.onesnap.springtest.web.rest.util.PaginationUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.inject.Inject;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

import static org.elasticsearch.index.query.QueryBuilders.*;

/**
 * REST controller for managing Teacher.
 */
@RestController
@RequestMapping("/api")
public class TeacherResource {

    private final Logger log = LoggerFactory.getLogger(TeacherResource.class);

    @Inject
    private TeacherRepository teacherRepository;

    @Inject
    private TeacherSearchRepository teacherSearchRepository;

    /**
     * POST  /teachers -> Create a new teacher.
     */
    @RequestMapping(value = "/teachers",
        method = RequestMethod.POST,
        produces = MediaType.APPLICATION_JSON_VALUE)
    @Timed
    public ResponseEntity<Teacher> createTeacher(@RequestBody Teacher teacher) throws URISyntaxException {
        log.debug("REST request to save Teacher : {}", teacher);
        if (teacher.getId() != null) {
            return ResponseEntity.badRequest().header("Failure", "A new teacher cannot already have an ID").body(null);
        }
        Teacher result = teacherRepository.save(teacher);
        teacherSearchRepository.save(result);
        return ResponseEntity.created(new URI("/api/teachers/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert("teacher", result.getId().toString()))
            .body(result);
    }

    /**
     * PUT  /teachers -> Updates an existing teacher.
     */
    @RequestMapping(value = "/teachers",
        method = RequestMethod.PUT,
        produces = MediaType.APPLICATION_JSON_VALUE)
    @Timed
    public ResponseEntity<Teacher> updateTeacher(@RequestBody Teacher teacher) throws URISyntaxException {
        log.debug("REST request to update Teacher : {}", teacher);
        if (teacher.getId() == null) {
            return createTeacher(teacher);
        }
        Teacher result = teacherRepository.save(teacher);
        teacherSearchRepository.save(teacher);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert("teacher", teacher.getId().toString()))
            .body(result);
    }

    /**
     * GET  /teachers -> get all the teachers.
     */
    @RequestMapping(value = "/teachers",
        method = RequestMethod.GET,
        produces = MediaType.APPLICATION_JSON_VALUE)
    @Timed
    public ResponseEntity<List<Teacher>> getAllTeachers(Pageable pageable)
        throws URISyntaxException {
        Page<Teacher> page = teacherRepository.findAll(pageable);
        HttpHeaders headers = PaginationUtil.generatePaginationHttpHeaders(page, "/api/teachers");
        return new ResponseEntity<>(page.getContent(), headers, HttpStatus.OK);
    }

    /**
     * GET  /teachers/:id -> get the "id" teacher.
     */
    @RequestMapping(value = "/teachers/{id}",
        method = RequestMethod.GET,
        produces = MediaType.APPLICATION_JSON_VALUE)
    @Timed
    public ResponseEntity<Teacher> getTeacher(@PathVariable Long id) {
        log.debug("REST request to get Teacher : {}", id);
        return Optional.ofNullable(teacherRepository.findOne(id))
            .map(teacher -> new ResponseEntity<>(
                teacher,
                HttpStatus.OK))
            .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    /**
     * DELETE  /teachers/:id -> delete the "id" teacher.
     */
    @RequestMapping(value = "/teachers/{id}",
        method = RequestMethod.DELETE,
        produces = MediaType.APPLICATION_JSON_VALUE)
    @Timed
    public ResponseEntity<Void> deleteTeacher(@PathVariable Long id) {
        log.debug("REST request to delete Teacher : {}", id);
        teacherRepository.delete(id);
        teacherSearchRepository.delete(id);
        return ResponseEntity.ok().headers(HeaderUtil.createEntityDeletionAlert("teacher", id.toString())).build();
    }

    /**
     * SEARCH  /_search/teachers/:query -> search for the teacher corresponding
     * to the query.
     */
    @RequestMapping(value = "/_search/teachers/{query}",
        method = RequestMethod.GET,
        produces = MediaType.APPLICATION_JSON_VALUE)
    @Timed
    public List<Teacher> searchTeachers(@PathVariable String query) {
        return StreamSupport
            .stream(teacherSearchRepository.search(queryStringQuery(query)).spliterator(), false)
            .collect(Collectors.toList());
    }
}
