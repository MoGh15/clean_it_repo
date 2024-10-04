package com.example.clean_it.util.exception.userfriendly;

/**
 * This exception Type will sent to User and should contain a User Friendly Exception.
 *
 */
public class UserFriendlyException extends Exception {

	private static final long serialVersionUID = -3504301095142895341L;

	public UserFriendlyException() {
		super();
	}

	public UserFriendlyException(String message, Throwable cause, boolean enableSuppression,
			boolean writableStackTrace) {
		super(message, cause, enableSuppression, writableStackTrace);
	}

	public UserFriendlyException(String message, Throwable cause) {
		super(message, cause);
	}

	public UserFriendlyException(String message) {
		super(message);
	}

	public UserFriendlyException(Throwable cause) {
		super(cause);
	}
}
