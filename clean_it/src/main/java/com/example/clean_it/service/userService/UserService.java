package com.example.clean_it.service.userService;

import com.example.clean_it.model.user.User;
import com.fasterxml.jackson.core.JsonProcessingException;
import lombok.NonNull;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public interface UserService {

    List<User> findAll();

    User findById(@NonNull String id);

    User save(@NonNull User user);

    User addUser(@NonNull User user, String UserId);

    void deleteById(@NonNull String id);

    void deleteAll(@NonNull List<User> userList);

    void replaceAll(List<User> users);


    ResponseEntity<String> getUserRole(String userID) throws JsonProcessingException;

    Optional<User> findByUsername(String username);
}
