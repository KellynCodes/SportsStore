import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Product } from '../model/product.model';
import { Order } from '../model/order.model';
const PORT = 3500;
const PROTOCOL = 'http';
@Injectable()
export class RestDataSource {
  baseUrl: string;
  auth_token?: string;
  constructor(private http: HttpClient) {
    this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
  }
  public getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}products`);
  }
  public saveOrder(order: Order): Observable<Order> {
    return this.http.post<Order>(`${this.baseUrl}orders`, order);
  }
  public authenticate(user: string, pass: string): Observable<boolean> {
    return this.http
      .post<any>(`${this.baseUrl}login`, {
        name: user,
        password: pass,
      })
      .pipe(
        map((response) => {
          this.auth_token = response.success ? response.token : null;
          return response.success;
        })
      );
  }
  public saveProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(
      `${this.baseUrl}products`,
      product,
      this.getOptions()
    );
  }
  public updateProduct(product: Product): Observable<Product> {
    return this.http.put<Product>(
      `${this.baseUrl}products/${product.id}`,
      product,
      this.getOptions()
    );
  }
  public deleteProduct(id: number): Observable<Product> {
    return this.http.delete<Product>(
      `${this.baseUrl}products/${id}`,
      this.getOptions()
    );
  }
  public getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.baseUrl}orders`, this.getOptions());
  }
  public deleteOrder(id: number): Observable<Order> {
    return this.http.delete<Order>(
      `${this.baseUrl}orders/${id}`,
      this.getOptions()
    );
  }
  public updateOrder(order: Order): Observable<Order> {
    return this.http.put<Order>(
      `${this.baseUrl}orders/${order.id}`,
      order,
      this.getOptions()
    );
  }
  private getOptions() {
    return {
      headers: new HttpHeaders({
        Authorization: `Bearer<${this.auth_token}>`,
      }),
    };
  }
}
