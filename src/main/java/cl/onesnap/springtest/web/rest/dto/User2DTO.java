package cl.onesnap.springtest.web.rest.dto;

import java.io.Serializable;
import java.util.Objects;
import javax.validation.constraints.Size;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.NotNull;


/**
 * A DTO for the User2 entity.
 * 
 * @author OneSnap
 */
public class User2DTO implements Serializable {

    public static final int PASSWORD_MIN_LENGTH = 5;

    public static final int PASSWORD_MAX_LENGTH = 100;

    private Long id;

    private Boolean activated;

    @Size(min = 2, max = 5)
    private String langKey;

    @Pattern(regexp = "^[a-z0-9]*$|(anonymousUser)")
    @NotNull
    @Size(min = 1, max = 50)
    private String login;

    @NotNull
    @Size(min = PASSWORD_MIN_LENGTH, max = PASSWORD_MAX_LENGTH)
    private String password;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        
        User2DTO user2DTO = (User2DTO) o;
        
        if (! Objects.equals(id, user2DTO.id)) {
            return false;
        }
        
        return true;
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(id);
    }

    @Override
    public String toString() {
        return "User2DTO{" + "id=" + id + "}";
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