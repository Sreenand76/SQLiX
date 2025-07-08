package login;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.*;
import repo.UserRepository;

@RestController
@RequestMapping("/api")
public class LoginController {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @Autowired
    private UserRepository userRepository;

    private String mode = "VULNERABLE"; 

    @PostMapping("/login")
    public String login(@RequestBody LoginRequest request) {
        String username = request.getUsername();
        String password = request.getPassword();

        if (mode.equals("VULNERABLE")) {
            try {
                String query = "SELECT * FROM users WHERE username='" + username + "' AND password='" + password + "'";
                System.out.println("Executing Query: " + query);
                var result = jdbcTemplate.queryForList(query);
                return result.isEmpty() ? "Invalid credentials" : "Logged in as " + username;
            } catch (Exception e) {
                return "Query failed: " + e.getMessage();
            }
        } else { // SECURE
            return userRepository.findByUsernameAndPassword(username, password)
                    .map(user -> "Logged in as " + username)
                    .orElse("Invalid credentials");
        }
    }

    @PostMapping("/toggle")
    public String toggleMode() {
        mode = mode.equals("VULNERABLE") ? "SECURE" : "VULNERABLE";
        return  mode;
    }

    @GetMapping("/mode")
    public String getMode() {
        return mode;
    }
}
