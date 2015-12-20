package cl.onesnap.springtest.domain;

import javax.persistence.MappedSuperclass;
import org.hibernate.envers.Audited;
import javax.persistence.EntityListeners;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import org.springframework.data.annotation.CreatedBy;
import javax.persistence.Column;
import java.time.ZonedDateTime;
import org.springframework.data.annotation.CreatedDate;


/**
 * A AbstractAuditingEntity2
 * 
 * @author OneSnap
 */
@MappedSuperclass
@Audited
@EntityListeners(AuditingEntityListener.class)
public abstract class AbstractAuditingEntity2 {

    @NotNull
    @Size(max = 50)
    @CreatedBy
    @Column(name = "created_by", updatable = false, nullable = false, length = 50)
    private String createdBy;

    @NotNull
    @CreatedDate
    @Column(name = "created_date", updatable = false, nullable = false)
    private ZonedDateTime createdDate = ZonedDateTime.now();

    public String getCreatedBy() {
        return createdBy;
    }

    public ZonedDateTime getCreatedDate() {
        return createdDate;
    }
}