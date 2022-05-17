import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Customer } from 'src/datasource/customer.model';
import { User } from 'src/datasource/user.model';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  displayColumns: string[] = [
    'name',
    'website',
    'address'
  ];
  user: any[] = [];
  customer: Customer[];
  customers: Customer[] = [];
  id: number;
  customersObservable: Observable<Customer[]>
  constructor(private customerService: CustomerService, private router: Router) { }

  ngOnInit(): void {
    this.customersObservable = this.customerService.getCustomers();
  }

  delete(id: number) {
    this.customerService.delete(id).subscribe(() => {
      this.customers = this.customers.filter((item) => item.id != id);
    });
  }

  update(customer) {
    this.customerService.setter(customer);
    this.router.navigate(['/customers/edit/', customer.id]);
  }

  showUsers(id: number){      
    this.router.navigate(['customers/users/', id]);
  }
}
