package com.example.clean_it.controller;

import com.example.clean_it.model.Customer;
import com.example.clean_it.service.CustomerService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@AllArgsConstructor
@RequestMapping("/api/customers")
public class CustomerController {
    private final CustomerService customerService;

    // Create a new customer
    @PostMapping
    public Customer createCustomer(@RequestBody Customer customer) {
        return customerService.createCustomer(customer);
    }

    // Get all customers
    @GetMapping
    @PreAuthorize("hasAuthority('ADMIN') or hasAuthority('MANAGER')")
    public List<Customer> getAllCustomers() {
        return customerService.getAllCustomers();
    }

    // Get a customer by ID
    @GetMapping("/{id}")
    public Optional<Customer> getCustomerById(@PathVariable String id) {
        return Optional.ofNullable( customerService.getCustomerById(id));
    }

    // Get a customer by email
    @GetMapping("/email")
    public Optional<Customer> getCustomerByEmail(@RequestParam String email) {
        return Optional.ofNullable(customerService.getCustomerByEmail(email));
    }

    // Delete a customer by ID
    @DeleteMapping("/{id}")
    public void deleteCustomer(@PathVariable String id) {
        customerService.deleteCustomer(id);
    }
}
