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
@Document(collection = "customers")
public class Customer {

    @Id
    private String id;  // MongoDB uses String type IDs by default
    private String name;
    private String email;
    private String phoneNumber;
    private List<String> orderIds;  // Storing related order IDs (can also embed orders if needed)
}