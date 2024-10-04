import { Component } from '@angular/core';
import {Order, TextileItem} from "../../../models/order";
import {ApiService} from "../../../services/api.service";
import {Customer} from "../../../models/customer";

@Component({
  selector: 'app-clothing-submission',
  templateUrl: './clothing-submission.component.html',
  styleUrl: './clothing-submission.component.scss'
})
export class ClothingSubmissionComponent {
  newOrder: Order = new Order();  // Model for new order
  newTextileItem: TextileItem = new TextileItem();  // Model for the textile item
  customer: Customer | null = null;  // Current customer
  customerEmailOrId: string = '';  // Input for customer email or ID
  customerNotFound: boolean = false;  // If customer is not found
  successMessage: string = '';  // Success message after order submission
  errorMessage: string = '';  // Error message for submission failure

  constructor(private apiService: ApiService) {}

  // Check if the customer exists based on email or ID
  checkCustomer() {
    if (this.customerEmailOrId) {
      this.apiService.getCustomerById(this.customerEmailOrId).subscribe(
        (data: Customer) => {
          this.customer = data;
          this.newOrder.customerId = data.id;
          this.customerNotFound = false;
        },
        (error) => {
          this.customer = null;
          this.customerNotFound = true;
          this.errorMessage = 'Customer not found. Do you want to create a new customer?';
        }
      );
    }
  }

  // Add a new textile item to the order
  addTextileItem() {
    this.newOrder.items.push(this.newTextileItem);
    this.newTextileItem = new TextileItem();  // Reset the textile item input fields
  }

  // Submit the order
  submitOrder() {
    if (this.newOrder.customerId && this.newOrder.items.length > 0) {
      this.apiService.createOrder(this.newOrder).subscribe(
        (data) => {
          this.successMessage = 'Order submitted successfully!';
          this.errorMessage = '';
          this.customer = null;
          this.newOrder = new Order();  // Reset the order form
        },
        (error) => {
          this.errorMessage = 'Failed to submit order. Please try again.';
          this.successMessage = '';
        }
      );
    } else {
      this.errorMessage = 'Please provide all required information.';
    }
  }
}
