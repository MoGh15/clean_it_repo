package com.example.clean_it.controller;



import com.example.clean_it.model.auth.AuthenticationRequest;
import com.example.clean_it.model.auth.AuthenticationResponse;
import com.example.clean_it.model.auth.RegisterRequest;
import com.example.clean_it.model.user.User;
import com.example.clean_it.service.authenticationService.AuthenticationService;
import com.example.clean_it.service.userService.UserRepository;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.util.Locale;

@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
public class AuthenticationController {

    private final AuthenticationService service;
    private final UserRepository userRepository;

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody RegisterRequest request) {
        User user = userRepository.findByUsername(request.getUsername().toLowerCase(Locale.ROOT)).orElse(null);
        if (user != null) {
            // Benutzer existiert bereits
            return ResponseEntity.status(HttpStatus.CONFLICT).build(); // Konflikt - 409
        }
        // Überprüfen Sie die Passwortlänge
        if (request.getPassword().length() < 8) {
            // Passwort ist zu kurz
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Das Passwort muss mindestens 8 Zeichen lang sein."); // Bad Request - 400
        }
        // Erfolgreiche Registrierung
        AuthenticationResponse response = service.register(request);
        return ResponseEntity.status(HttpStatus.OK).build(); // OK - 200
    }

    @PostMapping("/authenticate")
    public ResponseEntity<AuthenticationResponse> authenticate(@RequestBody AuthenticationRequest request) {
        return ResponseEntity.ok(service.authenticate(request));
    }

    @PostMapping("/refresh-token")
    public void refreshToken(HttpServletRequest request, HttpServletResponse response) throws IOException {
        service.refreshToken(request, response);
    }


}