package springboot_cicd_app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import springboot_cicd_app.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {
}