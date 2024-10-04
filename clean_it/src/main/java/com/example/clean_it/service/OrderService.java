package com.example.clean_it.service;

import com.example.clean_it.model.Order;
import com.example.clean_it.mongo_db_repo.OrderRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class OrderService {

    private final OrderRepository orderRepository;

    // Create or update an order
    public Order createOrUpdateOrder(Order order) {
        return orderRepository.save(order);
    }

    // Retrieve all orders
    public List<Order> getAllOrders() {
        return orderRepository.findAll();
    }

    // Find an order by its ID
    public Optional<Order> getOrderById(String id) {
        return orderRepository.findById(id);
    }

    // Find orders by customer ID
    public List<Order> getOrdersByCustomerId(String customerId) {
        return orderRepository.findByCustomerId(customerId);
    }

    // Find orders by status (e.g., submitted, cleaned, returned)
    public List<Order> getOrdersByStatus(String status) {
        return orderRepository.findByStatus(status);
    }

    // Delete an order by its ID
    public void deleteOrder(String id) {
        orderRepository.deleteById(id);
    }
}