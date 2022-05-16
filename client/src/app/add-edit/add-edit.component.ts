import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from 'src/datasource/user.model';
import { UsersDataService } from '../services/users-data.service';
@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css'],
})
export class AddEditComponent implements OnInit {
  isAddMode: boolean;
  id: number;
  user: User;
  Form: FormGroup;
  data: any;
  customerList: {
    id: number;
    name: string;
    website: string;
    address: string;
  }[] = [];
  roleList: { name: string; key: string; description: string; }[] = [];
  url: string;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private userService: UsersDataService
  ) {}

  ngOnInit(): void {
    this.id = +this.route.snapshot.params['userId'];
    
    this.user = this.userService.getter();
    this.isAddMode = !this.id;
    this.Form = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      middleName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required]],
      roleName: ['', [Validators.required]],
      address: ['', [Validators.required]],
      customerId: ['', [Validators.required]],
    });
    this.userService.getCustomerList().subscribe((data) => {
      this.customerList = data;     
    });
    this.userService.getRoleList().subscribe((data) => {
      this.roleList = data;
    });
    if (!this.isAddMode) {
      this.userService.getUser(this.id).subscribe((value) => {
        if (value) {
          this.data = value;
          Object.keys(this.data).forEach((Key) => {
            this.Form.patchValue({ [Key]: this.data[Key] });
          });
        }
      });
    }
  }

  onSubmit() {
    if (this.isAddMode) {
      this.createUser();
    } else {
      this.updateUser();
    }
  }

  private createUser() {

    this.userService.createUser(this.Form.value).subscribe((res) => {
      console.log('created successfully');
      this.router.navigate(['/']);
    });
  }

  private updateUser() {
    this.Form.value.phoneNumber = +this.Form.value.phoneNumber;
    this.Form.value.customerId = +this.Form.value.customerId;
    this.userService.updateUser(this.id, this.Form.value).subscribe(() => {
      console.log('updated successfully');
      this.router.navigate(['/']);
    });
  }

  CancelChanges() {
    this.userService.getUser(this.id).subscribe((x) => this.Form.patchValue(x));
    this.router.navigate(['/user']);
  }
}
