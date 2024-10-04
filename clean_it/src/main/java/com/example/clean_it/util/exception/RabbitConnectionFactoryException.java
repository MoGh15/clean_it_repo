package com.example.clean_it.util.exception;

public class RabbitConnectionFactoryException extends RuntimeException {
    public RabbitConnectionFactoryException(String message, Throwable cause) {
        super(message, cause);
    }
}
