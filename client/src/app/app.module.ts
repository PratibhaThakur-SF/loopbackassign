import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { UserDataComponent } from './user-data/user-data.component';
import { AddEditComponent } from './add-edit/add-edit.component';
import { CustomersComponent } from './customers/customers.component';
import { AddEditCustomerComponent } from './add-edit-customer/add-edit-customer.component';

@NgModule({
  declarations: [
    AppComponent,
    UserDataComponent,
    AddEditComponent,
    CustomersComponent,
    AddEditCustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
