package com.example.clean_it.util.exception;

import lombok.NoArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@NoArgsConstructor
@ResponseStatus(HttpStatus.NO_CONTENT)
public class NoContentException extends RuntimeException {

    public NoContentException(String message) {
        super(message);
    }
}
