package cl.onesnap.springtest.service.crud;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import cl.onesnap.springtest.repository.User2Repository;
import javax.inject.Inject;
import cl.onesnap.springtest.web.rest.mapper.User2Mapper;
import cl.onesnap.springtest.domain.User2;
import cl.onesnap.springtest.web.rest.dto.User2DTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;


/**
 * @author OneSnap
 */
@Service
@Transactional
public class User2CRUDService {

    @Inject
    private User2Repository user2Repository;

    @Inject
    private User2Mapper user2Mapper;

    public User2 createUser2(User2DTO user2DTO) {
        // TODO: if dto.getId() != null raise CustomParameterizedException
        User2 user2 = user2Mapper.user2DTOToUser2(user2DTO);
        return user2Repository.save(user2);
    }

    public User2 updateUser2(User2DTO user2DTO) {
        // TODO: if dto.getId() == null: create
        User2 user2 = user2Mapper.user2DTOToUser2(user2DTO);
        return user2Repository.save(user2);
    }

    public Page<User2> getAllUser2s(Pageable pageable) {
        return user2Repository.findAll(pageable);
    }

    public User2 getUser2(Long id) {
        return user2Repository.findOne(id);
    }

    public void deleteUser2(Long id) {
        user2Repository.delete(id);
    }
}