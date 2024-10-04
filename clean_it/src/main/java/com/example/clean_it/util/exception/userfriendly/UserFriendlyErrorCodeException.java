package com.example.clean_it.util.exception.userfriendly;

/**
 * This exception Type will sent to User and should contain a User Friendly Exception.
 *
 */
public class UserFriendlyErrorCodeException extends Exception {

	private static final long serialVersionUID = -3504301095142895341L;

	public UserFriendlyErrorCodeException() {
		super();
	}

	public UserFriendlyErrorCodeException(String message, Throwable cause, boolean enableSuppression,
			boolean writableStackTrace) {
		super(message, cause, enableSuppression, writableStackTrace);
	}

	public UserFriendlyErrorCodeException(String message, Throwable cause) {
		super(message, cause);
	}

	public UserFriendlyErrorCodeException(String message) {
		super(message);
	}

	public UserFriendlyErrorCodeException(Throwable cause) {
		super(cause);
	}
}
