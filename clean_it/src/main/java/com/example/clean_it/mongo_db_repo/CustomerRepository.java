package com.example.clean_it.mongo_db_repo;

import com.example.clean_it.model.Customer;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CustomerRepository extends MongoRepository<Customer, String> {
    // Custom query methods can be defined here, e.g., finding a customer by email
    Customer findByEmail(String email);
}
