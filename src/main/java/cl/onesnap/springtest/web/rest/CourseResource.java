package cl.onesnap.springtest.web.rest;

import com.codahale.metrics.annotation.Timed;
import cl.onesnap.springtest.domain.Course;
import cl.onesnap.springtest.repository.CourseRepository;
import cl.onesnap.springtest.repository.search.CourseSearchRepository;
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
 * REST controller for managing Course.
 */
@RestController
@RequestMapping("/api")
public class CourseResource {

    private final Logger log = LoggerFactory.getLogger(CourseResource.class);

    @Inject
    private CourseRepository courseRepository;

    @Inject
    private CourseSearchRepository courseSearchRepository;

    /**
     * POST  /courses -> Create a new course.
     */
    @RequestMapping(value = "/courses",
        method = RequestMethod.POST,
        produces = MediaType.APPLICATION_JSON_VALUE)
    @Timed
    public ResponseEntity<Course> createCourse(@RequestBody Course course) throws URISyntaxException {
        log.debug("REST request to save Course : {}", course);
        if (course.getId() != null) {
            return ResponseEntity.badRequest().header("Failure", "A new course cannot already have an ID").body(null);
        }
        Course result = courseRepository.save(course);
        courseSearchRepository.save(result);
        return ResponseEntity.created(new URI("/api/courses/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert("course", result.getId().toString()))
            .body(result);
    }

    /**
     * PUT  /courses -> Updates an existing course.
     */
    @RequestMapping(value = "/courses",
        method = RequestMethod.PUT,
        produces = MediaType.APPLICATION_JSON_VALUE)
    @Timed
    public ResponseEntity<Course> updateCourse(@RequestBody Course course) throws URISyntaxException {
        log.debug("REST request to update Course : {}", course);
        if (course.getId() == null) {
            return createCourse(course);
        }
        Course result = courseRepository.save(course);
        courseSearchRepository.save(course);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert("course", course.getId().toString()))
            .body(result);
    }

    /**
     * GET  /courses -> get all the courses.
     */
    @RequestMapping(value = "/courses",
        method = RequestMethod.GET,
        produces = MediaType.APPLICATION_JSON_VALUE)
    @Timed
    public ResponseEntity<List<Course>> getAllCourses(Pageable pageable)
        throws URISyntaxException {
        Page<Course> page = courseRepository.findAll(pageable);
        HttpHeaders headers = PaginationUtil.generatePaginationHttpHeaders(page, "/api/courses");
        return new ResponseEntity<>(page.getContent(), headers, HttpStatus.OK);
    }

    /**
     * GET  /courses/:id -> get the "id" course.
     */
    @RequestMapping(value = "/courses/{id}",
        method = RequestMethod.GET,
        produces = MediaType.APPLICATION_JSON_VALUE)
    @Timed
    public ResponseEntity<Course> getCourse(@PathVariable Long id) {
        log.debug("REST request to get Course : {}", id);
        return Optional.ofNullable(courseRepository.findOneWithEagerRelationships(id))
            .map(course -> new ResponseEntity<>(
                course,
                HttpStatus.OK))
            .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    /**
     * DELETE  /courses/:id -> delete the "id" course.
     */
    @RequestMapping(value = "/courses/{id}",
        method = RequestMethod.DELETE,
        produces = MediaType.APPLICATION_JSON_VALUE)
    @Timed
    public ResponseEntity<Void> deleteCourse(@PathVariable Long id) {
        log.debug("REST request to delete Course : {}", id);
        courseRepository.delete(id);
        courseSearchRepository.delete(id);
        return ResponseEntity.ok().headers(HeaderUtil.createEntityDeletionAlert("course", id.toString())).build();
    }

    /**
     * SEARCH  /_search/courses/:query -> search for the course corresponding
     * to the query.
     */
    @RequestMapping(value = "/_search/courses/{query}",
        method = RequestMethod.GET,
        produces = MediaType.APPLICATION_JSON_VALUE)
    @Timed
    public List<Course> searchCourses(@PathVariable String query) {
        return StreamSupport
            .stream(courseSearchRepository.search(queryStringQuery(query)).spliterator(), false)
            .collect(Collectors.toList());
    }
}
