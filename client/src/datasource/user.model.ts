
class Customer{
  id: number;
  name: string;
  website: string;
  address: string; 
}
class Role{
  name: string;
  key: string;
  description: string;
}
export class User {
  id: number;
  firstName: string;
  middleName: string;
  lastName: string;
  email: string;
  phoneNumber: number;
  address: string;
  customerId: number;
  roleName: string;
  customer: Customer;
  role: Role;
}
