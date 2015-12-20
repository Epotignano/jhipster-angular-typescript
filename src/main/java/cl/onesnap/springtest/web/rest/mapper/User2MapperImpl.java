package cl.onesnap.springtest.web.rest.mapper;

import org.springframework.stereotype.Component;
import cl.onesnap.springtest.domain.User2;
import cl.onesnap.springtest.web.rest.dto.User2DTO;


/**
 * Mapper for the entity User2 and its DTO User2DTO.
 * 
 * @author OneSnap
 */
@Component
public class User2MapperImpl implements User2Mapper {

    @Override
    public User2DTO user2ToUser2DTO(User2 user2) {
        if (user2 == null) {
            return null;
        }
        
        User2DTO user2DTO = new User2DTO();
        
        user2DTO.setId(user2.getId());
        
        user2DTO.setActivated(user2.getActivated());
        user2DTO.setLangKey(user2.getLangKey());
        user2DTO.setLogin(user2.getLogin());
        user2DTO.setPassword(user2.getPassword());
        
        return user2DTO;
    }

    @Override
    public User2 user2DTOToUser2(User2DTO user2DTO) {
        if (user2DTO == null) {
            return null;
        }
        
        User2 user2 = new User2();
        
        user2.setId(user2DTO.getId());
        
        user2.setActivated(user2DTO.getActivated());
        user2.setLangKey(user2DTO.getLangKey());
        user2.setLogin(user2DTO.getLogin());
        user2.setPassword(user2DTO.getPassword());
        
        return user2;
    }
}