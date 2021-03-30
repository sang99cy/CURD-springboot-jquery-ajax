package net.javaguides.springboot;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import net.javaguides.springboot.entity.User;
import net.javaguides.springboot.service.UserService;

@SpringBootApplication
public class SpringbootCrudRestfulWebservicesApplication implements CommandLineRunner {

	@Autowired
	UserService userService;

	public static void main(String[] args) {
		SpringApplication.run(SpringbootCrudRestfulWebservicesApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		/*
		 * String theFirst = "sang1 tois"; String ROM = "\"" + theFirst + "\"";
		 * List<User> list = userService.search(ROM); for (User u : list) {
		 * System.out.println(u.getFirstName()); }
		 */

	}

}
