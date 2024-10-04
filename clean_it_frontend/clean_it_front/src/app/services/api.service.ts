import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';


import {AuthResponse, User} from "../models/user";

import {EventStore} from "./eventStore";
import {Order} from "../models/order";
import {Customer} from "../models/customer";


const url = "http://localhost:8080/api/";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url = url;

  constructor(private http: HttpClient, private eventStore: EventStore) {
  }

  private getHeaders(): HttpHeaders {
    const accessToken = this.eventStore.getAccessToken();
    return new HttpHeaders({
      'Authorization': `Bearer ${accessToken}`
    });
  }
  register(user: User): Observable<any> {
    const url = `${this.url}v1/auth/register`;
    return this.http.post(url, user);
  }

  authenticate(username: string, password: string) {
    const headers = this.getHeaders();
    return this.http
      .post<AuthResponse>(this.url + 'v1/auth/authenticate', {username, password})
  }

  getUserRole(userID: string) {
    const headers = this.getHeaders();
    const url = `${this.url + `user/role/${userID}`}`;
    return this.http.get<{ role: string }>(url, {headers});
  }

  // Get all orders
  getAllOrders(): Observable<Order[]> {
    const headers = this.getHeaders();
    return this.http.get<Order[]>(this.url + 'orders', {headers});
  }

  // Create a new order
  createOrder(order: Order): Observable<Order> {
    const headers = this.getHeaders();
    return this.http.post<Order>(this.url + 'orders', order, {headers});
  }

  addCustomer(customer: Customer): Observable<Customer> {
    const headers = this.getHeaders();
    return this.http.post<Customer>(this.url + 'customers', customer, {headers});
  }
  getCustomerById(id: string): Observable<Customer> {
    const headers = this.getHeaders();
    return this.http.get<Customer>(this.url + `customers/${id}`, {headers});
  }
  getAllCustomers(): Observable<Customer[]> {
    const headers = this.getHeaders();
    return this.http.get<Customer[]>(this.url + 'customers', {headers});
  }
  updateOrderStatus(order: Order): Observable<Order> {
    const headers = this.getHeaders();
    return this.http.put<Order>(this.url + `orders/${order.id}`, order, {headers});
  }
}
