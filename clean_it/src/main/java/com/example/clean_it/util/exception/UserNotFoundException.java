package com.example.clean_it.util.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.BAD_REQUEST, reason = "The user was not found!")
public class UserNotFoundException extends RuntimeException {
}
