import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditCustomerComponent } from './add-edit-customer/add-edit-customer.component';
import { AddEditComponent } from './add-edit/add-edit.component';
import { AppComponent } from './app.component';
import { CustomersComponent } from './customers/customers.component';
import { UserDataComponent } from './user-data/user-data.component';

const routes: Routes = [
  { path: 'users/edit/:userId', component: AddEditComponent },
  { path: 'users/add', component: AddEditComponent },
  { path: 'user', component: UserDataComponent },
  {path: 'customers', component: CustomersComponent},
  {path: 'customers/add', component: AddEditCustomerComponent},
  { path: 'customers/edit/:customerId', component: AddEditCustomerComponent },
  {path: 'customers/users/:customerId',component: UserDataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
