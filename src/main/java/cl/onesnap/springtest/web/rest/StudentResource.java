package cl.onesnap.springtest.web.rest;

import com.codahale.metrics.annotation.Timed;
import cl.onesnap.springtest.domain.Student;
import cl.onesnap.springtest.repository.StudentRepository;
import cl.onesnap.springtest.repository.search.StudentSearchRepository;
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
 * REST controller for managing Student.
 */
@RestController
@RequestMapping("/api")
public class StudentResource {

    private final Logger log = LoggerFactory.getLogger(StudentResource.class);

    @Inject
    private StudentRepository studentRepository;

    @Inject
    private StudentSearchRepository studentSearchRepository;

    /**
     * POST  /students -> Create a new student.
     */
    @RequestMapping(value = "/students",
        method = RequestMethod.POST,
        produces = MediaType.APPLICATION_JSON_VALUE)
    @Timed
    public ResponseEntity<Student> createStudent(@RequestBody Student student) throws URISyntaxException {
        log.debug("REST request to save Student : {}", student);
        if (student.getId() != null) {
            return ResponseEntity.badRequest().header("Failure", "A new student cannot already have an ID").body(null);
        }
        Student result = studentRepository.save(student);
        studentSearchRepository.save(result);
        return ResponseEntity.created(new URI("/api/students/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert("student", result.getId().toString()))
            .body(result);
    }

    /**
     * PUT  /students -> Updates an existing student.
     */
    @RequestMapping(value = "/students",
        method = RequestMethod.PUT,
        produces = MediaType.APPLICATION_JSON_VALUE)
    @Timed
    public ResponseEntity<Student> updateStudent(@RequestBody Student student) throws URISyntaxException {
        log.debug("REST request to update Student : {}", student);
        if (student.getId() == null) {
            return createStudent(student);
        }
        Student result = studentRepository.save(student);
        studentSearchRepository.save(student);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert("student", student.getId().toString()))
            .body(result);
    }

    /**
     * GET  /students -> get all the students.
     */
    @RequestMapping(value = "/students",
        method = RequestMethod.GET,
        produces = MediaType.APPLICATION_JSON_VALUE)
    @Timed
    public ResponseEntity<List<Student>> getAllStudents(Pageable pageable)
        throws URISyntaxException {
        Page<Student> page = studentRepository.findAll(pageable);
        HttpHeaders headers = PaginationUtil.generatePaginationHttpHeaders(page, "/api/students");
        return new ResponseEntity<>(page.getContent(), headers, HttpStatus.OK);
    }

    /**
     * GET  /students/:id -> get the "id" student.
     */
    @RequestMapping(value = "/students/{id}",
        method = RequestMethod.GET,
        produces = MediaType.APPLICATION_JSON_VALUE)
    @Timed
    public ResponseEntity<Student> getStudent(@PathVariable Long id) {
        log.debug("REST request to get Student : {}", id);
        return Optional.ofNullable(studentRepository.findOne(id))
            .map(student -> new ResponseEntity<>(
                student,
                HttpStatus.OK))
            .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    /**
     * DELETE  /students/:id -> delete the "id" student.
     */
    @RequestMapping(value = "/students/{id}",
        method = RequestMethod.DELETE,
        produces = MediaType.APPLICATION_JSON_VALUE)
    @Timed
    public ResponseEntity<Void> deleteStudent(@PathVariable Long id) {
        log.debug("REST request to delete Student : {}", id);
        studentRepository.delete(id);
        studentSearchRepository.delete(id);
        return ResponseEntity.ok().headers(HeaderUtil.createEntityDeletionAlert("student", id.toString())).build();
    }

    /**
     * SEARCH  /_search/students/:query -> search for the student corresponding
     * to the query.
     */
    @RequestMapping(value = "/_search/students/{query}",
        method = RequestMethod.GET,
        produces = MediaType.APPLICATION_JSON_VALUE)
    @Timed
    public List<Student> searchStudents(@PathVariable String query) {
        return StreamSupport
            .stream(studentSearchRepository.search(queryStringQuery(query)).spliterator(), false)
            .collect(Collectors.toList());
    }
}
