package cl.onesnap.springtest.repository;

import cl.onesnap.springtest.domain.Course;

import org.springframework.data.jpa.repository.*;
import org.springframework.data.repository.query.Param;

import java.util.List;

/**
 * Spring Data JPA repository for the Course entity.
 */
public interface CourseRepository extends JpaRepository<Course,Long> {

    @Query("select distinct course from Course course left join fetch course.students")
    List<Course> findAllWithEagerRelationships();

    @Query("select course from Course course left join fetch course.students where course.id =:id")
    Course findOneWithEagerRelationships(@Param("id") Long id);

}
