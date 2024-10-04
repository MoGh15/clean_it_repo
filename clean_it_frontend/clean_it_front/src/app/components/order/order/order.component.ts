import {Component, OnInit} from '@angular/core';
import {Order} from "../../../models/order";
import {ApiService} from "../../../services/api.service";
import {Customer} from "../../../models/customer";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrl: './order.component.scss'
})
export class OrderComponent implements OnInit {
  orders: Order[] = [];  // Array to hold the orders
  filteredOrders: Order[] = [];  // Array to hold filtered orders
  customers: Customer[] = [];  // Array to hold customers for the dropdown
  isLoading: boolean = false;  // To show loading spinner if needed
  errorMessage: string = '';  // To display any error messages
  selectedCustomerId: string = '';  // To filter orders by customer
  statusOptions: string[] = ['submitted', 'cleaned', 'returned'];  // Order status options

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.getOrders();  // Fetch all orders on component initialization
    this.getCustomers();  // Fetch all customers for the dropdown
  }

  // Fetch all orders from the server
  getOrders() {
    this.isLoading = true;
    this.apiService.getAllOrders().subscribe(
      (data: Order[]) => {
        this.orders = data;
        this.filteredOrders = data;  // Initially, show all orders
        this.isLoading = false;
      },
      (error) => {
        this.errorMessage = 'Could not load orders.';
        this.isLoading = false;
      }
    );
  }

  // Fetch all customers from the server for filtering
  getCustomers() {
    this.apiService.getAllCustomers().subscribe(
      (data: Customer[]) => {
        this.customers = data;
      },
      (error) => {
        this.errorMessage = 'Could not load customers.';
      }
    );
  }

  // Filter orders by selected customer
  filterOrdersByCustomer() {
    if (this.selectedCustomerId) {
      this.filteredOrders = this.orders.filter(order => order.customerId === this.selectedCustomerId);
    } else {
      this.filteredOrders = this.orders;  // Show all orders if no customer is selected
    }
  }

  // Update the status of an order
  updateOrderStatus(order: Order) {
    this.apiService.updateOrderStatus(order).subscribe(
      (data) => {
        console.log('Order status updated successfully');
      },
      (error) => {
        this.errorMessage = 'Could not update order status.';
      }
    );
  }

}
