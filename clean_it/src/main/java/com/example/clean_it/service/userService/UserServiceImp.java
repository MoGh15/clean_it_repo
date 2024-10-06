package com.example.clean_it.service.userService;

import com.example.clean_it.model.user.User;
import com.example.clean_it.mongo_db_repo.UserRepository;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;
import lombok.NonNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImp implements UserService {

    private final UserRepository userRepository;

    @Autowired
    public UserServiceImp(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public List<User> findAll() {
        return null;
    }

    @Override
    public User findById(@NonNull String id) {
        return userRepository.findById(id).orElse(null);
    }

    @Override
    public User save(@NonNull User user) {
        return userRepository.save(user);
    }

    @Override
    public User addUser(@NonNull User user, String UserId) {
        return null;
    }

    @Override
    public void deleteById(@NonNull String id) {

    }

    @Override
    public void deleteAll(@NonNull List<User> userList) {

    }

    @Override
    public void replaceAll(List<User> users) {

    }


    @Override
    public ResponseEntity<String> getUserRole(String userID) throws JsonProcessingException {
        User user = findById(userID);
        if (user != null) {
            ObjectMapper objectMapper = new ObjectMapper();
            ObjectNode response = objectMapper.createObjectNode();
            response.put("role", user.getRole().toString());
            return ResponseEntity.ok(objectMapper.writeValueAsString(response));
        }
        return ResponseEntity.notFound().build();
    }


    public Optional<User> findByUsername(String username) {
        return userRepository.findByUsername(username);
    }
}
