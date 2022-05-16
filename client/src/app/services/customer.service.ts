import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Customer } from 'src/datasource/customer.model';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private customer: Customer;
  url: any = 'http://localhost:3000/customers';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(private httpClient: HttpClient) { }
  setter(customer: Customer) {
    this.customer = customer;
  }
  getter() {
    return this.customer;
  }
  getCustomers(): Observable<Customer[]> {
    return this.httpClient.get(this.url).pipe(
      map((res: any) => {
        console.log(res);
        return res || {};
      }),
      catchError(this.errorHandler)
    );
  }
  getCustomer(id: any): Observable<Customer> {
    return this.httpClient.get(`${this.url}/${id}`, this.httpOptions).pipe(
      map((res: Customer) => {
        return res;
      }),
      catchError(this.errorHandler)
    );
  }
  delete(id: any) {
    return this.httpClient
      .delete(`${this.url}/${id}`)
      .pipe(catchError(this.errorHandler));
  }
  create(data: Customer): Observable<any> {
    const headers = { 'content-type': 'application/json' };
    return this.httpClient
      .post(this.url, JSON.stringify(data), this.httpOptions)
      .pipe(catchError(this.errorHandler));
  }
  errorHandler(error: any) {
    let errorMessage: string;
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(() => {
      errorMessage;
    });
  }
}
