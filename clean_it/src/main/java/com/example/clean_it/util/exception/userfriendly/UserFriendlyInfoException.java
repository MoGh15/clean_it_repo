package com.example.clean_it.util.exception.userfriendly;

/**
 * This exception Type will sent to User and should contain a User Friendly Exception.
 * Instead to log this exception as error, will be log as INFO (Less relevant exception)
 *
 */
public class UserFriendlyInfoException extends Exception {

	private static final long serialVersionUID = -3504301095142895341L;

	public UserFriendlyInfoException() {
		super();
	}

	public UserFriendlyInfoException(String message, Throwable cause, boolean enableSuppression,
			boolean writableStackTrace) {
		super(message, cause, enableSuppression, writableStackTrace);
	}

	public UserFriendlyInfoException(String message, Throwable cause) {
		super(message, cause);
	}

	public UserFriendlyInfoException(String message) {
		super(message);
	}

	public UserFriendlyInfoException(Throwable cause) {
		super(cause);
	}
}
