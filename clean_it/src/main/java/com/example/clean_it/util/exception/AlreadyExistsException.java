package com.example.clean_it.util.exception;


import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.CONFLICT, reason = "ID is already taken")
public class AlreadyExistsException extends RuntimeException {
}
