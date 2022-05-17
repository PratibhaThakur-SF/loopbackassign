import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Customer } from 'src/datasource/customer.model';
import { CustomerService } from '../services/customer.service';
@Component({
  selector: 'app-add-edit-customer',
  templateUrl: './add-edit-customer.component.html',
  styleUrls: ['./add-edit-customer.component.css']
})
export class AddEditCustomerComponent implements OnInit {
isAddMode: boolean;
id: number;
customer: Customer;
Form: FormGroup;
data: any;
  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private customerService: CustomerService) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.params['customerId'];
    this.customer = this.customerService.getter();
    this.isAddMode = !this.id;
    
    this.Form = this.formBuilder.group({
      name: ['', [Validators.required]],
      website: ['', [Validators.required]],
      address: ['', [Validators.required]]
    });
    if (!this.isAddMode) {
      this.customerService.getCustomer(this.id).subscribe((value) => {
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
      //this.updateUser();
    }
  }

  private createUser() {
    this.customerService.create(this.Form.value).subscribe((res) => {
      console.log('created successfully');
      this.router.navigate(['/customers']);
    });
  }
}
