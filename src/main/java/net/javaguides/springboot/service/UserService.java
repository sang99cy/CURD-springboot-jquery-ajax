package net.javaguides.springboot.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import net.javaguides.springboot.entity.User;
import net.javaguides.springboot.repository.UserRepository;
/* neu regex khop voi dau ngoac kep thi chay ham like
 neu regex khac voi dau ngoac kep thi chay full text search*/

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public List<User> search(String keyword) {

        /* String chuoicodaungoackep = "\"" + keyword + "\""; */
        if (keyword.contains("\"")) {
            System.out.println("full text");
            return userRepository.fullTextSearh(keyword);
        } else {
            System.out.println("like name");
            String[] catchuois = keyword.split(",(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)", 2);
            for (String w : catchuois) {
                System.out.println(w);
                return userRepository.findByLikeNameUsers(w);
            }
        }
        return null;
    }

}
