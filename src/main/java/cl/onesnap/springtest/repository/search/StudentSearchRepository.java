package cl.onesnap.springtest.repository.search;

import cl.onesnap.springtest.domain.Student;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data ElasticSearch repository for the Student entity.
 */
public interface StudentSearchRepository extends ElasticsearchRepository<Student, Long> {
}
