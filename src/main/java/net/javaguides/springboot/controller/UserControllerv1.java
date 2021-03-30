package net.javaguides.springboot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import net.javaguides.springboot.entity.User;
import net.javaguides.springboot.repository.UserRepository;
import net.javaguides.springboot.service.UserService;

@Controller
public class UserControllerv1 {

	@Autowired
	private UserRepository userRepository;
	@Autowired
	private UserService userService;

	// get all users
	@GetMapping("/")
	public String getAllUsers(ModelMap modelMap) {
		modelMap.addAttribute("employees", userRepository.findAll());
		return "index";
	}

	// Full text search
	@GetMapping("/search")
	public String fulltextsearch(@Param("keyword") String keyword, ModelMap modelMap) {
		String message = "";
		List<User> lists = userService.search(keyword);
		for (User u : lists) {
			if (u == null) {
				message = "không tìm thấy bản ghi nào";
				System.out.println(message);
			}
		}
		modelMap.addAttribute("employees", userService.search(keyword));
		modelMap.addAttribute("message", message);
		modelMap.addAttribute("keyword", keyword);
		return "index";
	}

}
