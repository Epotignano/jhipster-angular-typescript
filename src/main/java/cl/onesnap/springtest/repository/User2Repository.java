package cl.onesnap.springtest.repository;

import cl.onesnap.springtest.domain.User2;
import org.springframework.data.jpa.repository.*;


/**
 * Spring Data JPA repository for the User2 entity.
 * 
 * @author OneSnap
 */
public interface User2Repository extends JpaRepository<User2, Long> {
}