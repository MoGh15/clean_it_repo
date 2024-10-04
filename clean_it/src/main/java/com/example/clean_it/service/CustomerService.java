package com.example.clean_it.service;

import com.example.clean_it.model.Customer;
import com.example.clean_it.mongo_db_repo.CustomerRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class CustomerService {

    private final CustomerRepository customerRepository;

    public Customer createCustomer(Customer customer) {
        Optional<Customer> existingCustomer = Optional.ofNullable(customerRepository.findByEmail(customer.getEmail()));
        if (existingCustomer.isPresent()) {
            throw new IllegalArgumentException("Customer with the same email already exists");
        }
        return customerRepository.save(customer);
    }
    public Customer getCustomerById(String id) {
        return customerRepository.findById(id).orElse(null);
    }
    public void deleteCustomer(String id) {
        customerRepository.deleteById(id);
    }

    public Customer getCustomerByEmail(String email) {
        return customerRepository.findByEmail(email);
    }

    public List<Customer> getAllCustomers() {
        return customerRepository.findAll();
    }
}
