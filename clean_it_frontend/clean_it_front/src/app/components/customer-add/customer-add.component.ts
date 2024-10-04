import { Component } from '@angular/core';
import {Customer} from "../../models/customer";
import {ApiService} from "../../services/api.service";

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrl: './customer-add.component.scss'
})
export class CustomerAddComponent {
  newCustomer: Customer = new Customer();  // Model for the new customer
  successMessage: string = '';  // Success message after customer submission
  errorMessage: string = '';  // Error message if submission fails

  constructor(private apiService: ApiService) {}

  // Submit the new customer
  addCustomer() {
    if (this.newCustomer.name && this.newCustomer.email && this.newCustomer.phoneNumber) {
      this.apiService.addCustomer(this.newCustomer).subscribe(
        (data: Customer) => {  // Cast the response to Customer type
          this.successMessage = `Customer added successfully! ID: ${data.id}`;
          this.errorMessage = '';
          this.newCustomer = new Customer();  // Reset the form
        },
        (error) => {
          if (error.status === 400) {
            this.errorMessage = 'A customer with this email already exists.';
          } else {
            this.errorMessage = 'Failed to add customer. Please try again.';
          }
          this.successMessage = '';
        }
      );
    } else {
      this.errorMessage = 'Please provide all required information.';
    }
  }
}
