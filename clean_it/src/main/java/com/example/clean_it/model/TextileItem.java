package com.example.clean_it.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class TextileItem {

    private String type;  // E.g., "shirt", "trousers"
    private String status;  // E.g., "pending", "cleaned", "returned"

}

