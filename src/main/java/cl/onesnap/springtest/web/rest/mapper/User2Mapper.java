package cl.onesnap.springtest.web.rest.mapper;

import cl.onesnap.springtest.domain.User2;
import cl.onesnap.springtest.web.rest.dto.User2DTO;


/**
 * Mapper Interface for the entity User2 and its DTO User2DTO.
 * 
 * @author OneSnap
 */
public interface User2Mapper {

    User2DTO user2ToUser2DTO(User2 user2);

    User2 user2DTOToUser2(User2DTO user2DTO);
}