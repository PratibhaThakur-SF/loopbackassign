class User {
    id: number;
    firstName: string;
    middleName: string;
    lastName: string;
    email: string;
    phoneNumber: number;
    address: string;
    customerId: number;
    roleName: string;
  }
export class Customer{
    id: number;
    name: string;
    website: string;
    address: string; 
    users: User;
  }