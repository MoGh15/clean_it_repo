export class Customer {
  id?: string;  // Optional for when creating a new customer
  name: string = '';
  email: string = '';
  phoneNumber: string = '';
  orderIds: string[] = [];
}
