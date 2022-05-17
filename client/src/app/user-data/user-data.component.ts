import { Component, OnInit } from '@angular/core';
import { UsersDataService } from '../services/users-data.service';
import { User } from 'src/datasource/user.model';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../services/customer.service';
import { Customer } from 'src/datasource/customer.model';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css'],
})
export class UserDataComponent implements OnInit {
  title = 'Angular-assignment';
  displayColumns: string[] = [
    'firstName',
    'middleName',
    'lastName',
    'email',
    'phoneNumber',
    'address',
    'roleName',
    'customer'
  ];
  customer: Customer[] = [];
  users: User[] = [];
  newUser: User;
  id: number;
  user: any;
  userId: number[] = [];
  customerId: number;
  subscription: Subscription;
  constructor(private UserService: UsersDataService,private customerService: CustomerService, private router: Router,private route: ActivatedRoute,) {}

  ngOnInit(): void {    
    this.id = +this.route.snapshot.params['customerId'];
    if(!this.id){
      this.subscription = this.UserService.getUsers().subscribe((res) => {
        this.users = res;
        console.log(this.users);
      });
    }else{
      this.customerService.getCustomer(this.id).subscribe((res) => {
        this.user = res.users;
        console.log(this.user);
        
        this.user.forEach(u => {
          this.UserService.getUser(u.id).subscribe((res) => {
            this.newUser = res;
            this.users = [...this.users, this.newUser];
          })
        });
        console.log(this.users);
        
      })
    }
    
    
  }

  deleteUser(id: number) {
    this.UserService.delete(id).subscribe((res) => {
      this.users = this.users.filter((item) => item.id != id);
    });
  }

  update(user) {
    this.UserService.setter(user);
    this.router.navigate(['/users/edit/', user.id]);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
