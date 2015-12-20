package cl.onesnap.springtest.web.rest.util;

import org.springframework.http.HttpHeaders;


/**
 * Utility class for http header creation.
 * 
 * @author OneSnap
 */
public class HeaderUtil {

    public static HttpHeaders createAlert(String message, String param) {
        HttpHeaders headers = new HttpHeaders();
        headers.add("X-springTestApp-alert", message);
        headers.add("X-springTestApp-params", param);
        return headers;
    }

    public static HttpHeaders createEntityCreationAlert(String entityName, String param) {
        return createAlert("springTestApp." + entityName + ".created", param);
    }

    public static HttpHeaders createEntityUpdateAlert(String entityName, String param) {
        return createAlert("springTestApp." + entityName + ".updated", param);
    }

    public static HttpHeaders createEntityDeletionAlert(String entityName, String param) {
        return createAlert("springTestApp." + entityName + ".deleted", param);
    }
}