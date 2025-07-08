package repo;

import org.springframework.data.jpa.repository.JpaRepository;

import entity.User;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByUsernameAndPassword(String username, String password);
}