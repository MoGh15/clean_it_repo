package com.example.clean_it.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "orders")
public class Order {

    @Id
    private String id;  // MongoDB document ID

    private String customerId;  // Reference to the Customer
    private List<TextileItem> items;  // List of clothes submitted for cleaning
    private String status;  // Could be "submitted", "cleaned", "returned"

}
