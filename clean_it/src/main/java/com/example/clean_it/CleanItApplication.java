package com.example.clean_it;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages = {"com.example.clean_it"})
public class CleanItApplication {

	public static void main(String[] args) {
		SpringApplication.run(CleanItApplication.class, args);
	}

}
