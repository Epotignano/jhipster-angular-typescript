package cl.onesnap.springtest.web.rest;

import cl.onesnap.springtest.Application;
import cl.onesnap.springtest.domain.Teacher;
import cl.onesnap.springtest.repository.TeacherRepository;
import cl.onesnap.springtest.repository.search.TeacherSearchRepository;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import static org.hamcrest.Matchers.hasItem;
import org.mockito.MockitoAnnotations;
import org.springframework.boot.test.IntegrationTest;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.http.MediaType;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.data.web.PageableHandlerMethodArgumentResolver;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.util.ReflectionTestUtils;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.PostConstruct;
import javax.inject.Inject;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;


/**
 * Test class for the TeacherResource REST controller.
 *
 * @see TeacherResource
 */
@RunWith(SpringJUnit4ClassRunner.class)
@SpringApplicationConfiguration(classes = Application.class)
@WebAppConfiguration
@IntegrationTest
public class TeacherResourceIntTest {

    private static final String DEFAULT_NAME = "AAAAA";
    private static final String UPDATED_NAME = "BBBBB";

    @Inject
    private TeacherRepository teacherRepository;

    @Inject
    private TeacherSearchRepository teacherSearchRepository;

    @Inject
    private MappingJackson2HttpMessageConverter jacksonMessageConverter;

    @Inject
    private PageableHandlerMethodArgumentResolver pageableArgumentResolver;

    private MockMvc restTeacherMockMvc;

    private Teacher teacher;

    @PostConstruct
    public void setup() {
        MockitoAnnotations.initMocks(this);
        TeacherResource teacherResource = new TeacherResource();
        ReflectionTestUtils.setField(teacherResource, "teacherRepository", teacherRepository);
        ReflectionTestUtils.setField(teacherResource, "teacherSearchRepository", teacherSearchRepository);
        this.restTeacherMockMvc = MockMvcBuilders.standaloneSetup(teacherResource)
            .setCustomArgumentResolvers(pageableArgumentResolver)
            .setMessageConverters(jacksonMessageConverter).build();
    }

    @Before
    public void initTest() {
        teacher = new Teacher();
        teacher.setName(DEFAULT_NAME);
    }

    @Test
    @Transactional
    public void createTeacher() throws Exception {
        int databaseSizeBeforeCreate = teacherRepository.findAll().size();

        // Create the Teacher

        restTeacherMockMvc.perform(post("/api/teachers")
                .contentType(TestUtil.APPLICATION_JSON_UTF8)
                .content(TestUtil.convertObjectToJsonBytes(teacher)))
                .andExpect(status().isCreated());

        // Validate the Teacher in the database
        List<Teacher> teachers = teacherRepository.findAll();
        assertThat(teachers).hasSize(databaseSizeBeforeCreate + 1);
        Teacher testTeacher = teachers.get(teachers.size() - 1);
        assertThat(testTeacher.getName()).isEqualTo(DEFAULT_NAME);
    }

    @Test
    @Transactional
    public void getAllTeachers() throws Exception {
        // Initialize the database
        teacherRepository.saveAndFlush(teacher);

        // Get all the teachers
        restTeacherMockMvc.perform(get("/api/teachers"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$.[*].id").value(hasItem(teacher.getId().intValue())))
                .andExpect(jsonPath("$.[*].name").value(hasItem(DEFAULT_NAME.toString())));
    }

    @Test
    @Transactional
    public void getTeacher() throws Exception {
        // Initialize the database
        teacherRepository.saveAndFlush(teacher);

        // Get the teacher
        restTeacherMockMvc.perform(get("/api/teachers/{id}", teacher.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON))
            .andExpect(jsonPath("$.id").value(teacher.getId().intValue()))
            .andExpect(jsonPath("$.name").value(DEFAULT_NAME.toString()));
    }

    @Test
    @Transactional
    public void getNonExistingTeacher() throws Exception {
        // Get the teacher
        restTeacherMockMvc.perform(get("/api/teachers/{id}", Long.MAX_VALUE))
                .andExpect(status().isNotFound());
    }

    @Test
    @Transactional
    public void updateTeacher() throws Exception {
        // Initialize the database
        teacherRepository.saveAndFlush(teacher);

		int databaseSizeBeforeUpdate = teacherRepository.findAll().size();

        // Update the teacher
        teacher.setName(UPDATED_NAME);

        restTeacherMockMvc.perform(put("/api/teachers")
                .contentType(TestUtil.APPLICATION_JSON_UTF8)
                .content(TestUtil.convertObjectToJsonBytes(teacher)))
                .andExpect(status().isOk());

        // Validate the Teacher in the database
        List<Teacher> teachers = teacherRepository.findAll();
        assertThat(teachers).hasSize(databaseSizeBeforeUpdate);
        Teacher testTeacher = teachers.get(teachers.size() - 1);
        assertThat(testTeacher.getName()).isEqualTo(UPDATED_NAME);
    }

    @Test
    @Transactional
    public void deleteTeacher() throws Exception {
        // Initialize the database
        teacherRepository.saveAndFlush(teacher);

		int databaseSizeBeforeDelete = teacherRepository.findAll().size();

        // Get the teacher
        restTeacherMockMvc.perform(delete("/api/teachers/{id}", teacher.getId())
                .accept(TestUtil.APPLICATION_JSON_UTF8))
                .andExpect(status().isOk());

        // Validate the database is empty
        List<Teacher> teachers = teacherRepository.findAll();
        assertThat(teachers).hasSize(databaseSizeBeforeDelete - 1);
    }
}
