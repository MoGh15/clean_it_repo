export class TextileItem {
  type: string = '';  // Provide default value
  status: string = '';  // Provide default value

  constructor(type: string = '', status: string = '') {
    this.type = type;
    this.status = status;
  }
}

export class Order {
  id?: string;  // Optional for when creating a new order
  customerId: string | undefined = '';  // Provide default value
  items: TextileItem[] = [new TextileItem()];  // Default empty TextileItem
  status: string = 'submitted';  // Provide default value for status

  constructor(customerId: string = '', items: TextileItem[] = [new TextileItem()], status: string = 'submitted') {
    this.customerId = customerId;
    this.items = items;
    this.status = status;
  }
}

