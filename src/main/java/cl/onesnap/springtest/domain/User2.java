package cl.onesnap.springtest.domain;

import javax.persistence.*;
import java.util.Objects;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;
import javax.validation.constraints.Size;
import javax.persistence.Column;
import javax.validation.constraints.NotNull;
import java.time.ZonedDateTime;
import javax.validation.constraints.Pattern;


/**
 * A User2
 * 
 * @author OneSnap
 */
@Entity
@Table(name = "user_2")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class User2 {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Size(max = 20)
    @Column(name = "reset_key", length = 20)
    private String resetKey;

    @NotNull
    @Column(name = "activated", nullable = false)
    private Boolean activated = false;

    @Size(min = 2, max = 5)
    @Column(name = "lang_key", length = 5)
    private String langKey;

    @Column(name = "reset_date")
    private ZonedDateTime resetDate = null;

    @Size(max = 20)
    @Column(name = "activation_key", length = 20)
    private String activationKey;

    @Pattern(regexp = "^[a-z0-9]*$|(anonymousUser)")
    @NotNull
    @Size(min = 1, max = 50)
    @Column(name = "login", nullable = false, length = 50, unique = true)
    private String login;

    @NotNull
    @Size(min = 60, max = 60)
    @Column(name = "password_hash", nullable = false, length = 60)
    private String password;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(id);
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        User2 user2 = (User2) o;
        return Objects.equals(id, user2.id);
    }

    @Override
    public String toString() {
        return "User2{" + "id=" + id + "}";
    }

    public String getResetKey() {
        return resetKey;
    }

    public void setResetKey(String resetKey) {
        this.resetKey = resetKey;
    }

    public Boolean getActivated() {
        return activated;
    }

    public void setActivated(Boolean activated) {
        this.activated = activated;
    }

    public String getLangKey() {
        return langKey;
    }

    public void setLangKey(String langKey) {
        this.langKey = langKey;
    }

    public ZonedDateTime getResetDate() {
        return resetDate;
    }

    public void setResetDate(ZonedDateTime resetDate) {
        this.resetDate = resetDate;
    }

    public String getActivationKey() {
        return activationKey;
    }

    public void setActivationKey(String activationKey) {
        this.activationKey = activationKey;
    }

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}