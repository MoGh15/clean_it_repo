package com.example.clean_it.controller;

import com.example.clean_it.model.user.User;
import com.example.clean_it.service.userService.UserService;
import com.fasterxml.jackson.core.JsonProcessingException;

import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@AllArgsConstructor
@RequestMapping("/api")
public class UserController {
    private final UserService userService;

    @GetMapping(path = "/user/role/{userID}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<String> getUserRole(@PathVariable String userID) throws JsonProcessingException {
        return this.userService.getUserRole(userID);
    }

}
