package net.javaguides.springboot.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import net.javaguides.springboot.entity.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    @Query(value = "select u from User u where u.firstName LIKE %:firstName%")
    List<User> findByLikeNameUsers(@Param("firstName") String firstName);

    @Query(value = "SELECT * FROM users WHERE MATCH (email, first_name, last_name) AGAINST (?1)", nativeQuery = true)
    public List<User> fullTextSearh(String keyword);
}
