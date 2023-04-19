import { Product } from '../model/product.model';
import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { Order } from '../model/order.model';
@Injectable()
export class StaticDataSource {
  private products: Product[] = [
    {
      id: 1,
      name: 'Del xps',
      category: 'Del',
      description: '1 Terabyte ROM, 16 gigabyte RAM and touchscreen',
      price: 15000000,
    },
    {
      id: 2,
      name: 'Lenovo thinkpad',
      category: 'Lenovo',
      description: '1 500 gig SSD ROM, 8 gigabyte RAM and light weight',
      price: 15000000,
    },
    {
      id: 3,
      name: 'hp 250',
      category: 'HP',
      description: '500 gig ROM, 4 gigabyte RAM and large moinitor',
      price: 10000,
    },
  ];

  getProducts(): Observable<Product[]> {
    return from([this.products]);
  }
  saveOrder(order: Order): Observable<Order> {
    console.log(JSON.stringify(order));
    return from([order]);
  }
}
