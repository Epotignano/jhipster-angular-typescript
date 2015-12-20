package cl.onesnap.springtest.config;

import org.springframework.cloud.config.java.AbstractCloudConfig;
import org.springframework.context.annotation.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import javax.sql.DataSource;
import org.springframework.cache.CacheManager;


/**
 * @author OneSnap
 */
@Configuration
@Profile(Constants.SPRING_PROFILE_CLOUD)
public class CloudDatabaseConfiguration extends AbstractCloudConfig {

    private final Logger log = LoggerFactory.getLogger(CloudDatabaseConfiguration.class);

    @Bean
    public DataSource dataSource(CacheManager cacheManager) {
        log.info("Configuring JDBC datasource from a cloud provider");
        return connectionFactory().dataSource();
    }
}