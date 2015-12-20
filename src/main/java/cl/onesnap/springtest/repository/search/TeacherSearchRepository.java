package cl.onesnap.springtest.repository.search;

import cl.onesnap.springtest.domain.Teacher;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data ElasticSearch repository for the Teacher entity.
 */
public interface TeacherSearchRepository extends ElasticsearchRepository<Teacher, Long> {
}
