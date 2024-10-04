package com.example.clean_it.util.exception.userfriendly;

public class UserFriendlyRuntimeException extends RuntimeException {
    public UserFriendlyRuntimeException(String message) {
        super(message);
    }
}
