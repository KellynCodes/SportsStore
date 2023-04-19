import { RestDataSource } from '../rest.datasource';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../../model/order.model';
//import { StaticDataSource } from '../../model/static.datasource';

@Injectable()
export class OrderRepository {
  private orders: Order[] = [];
  private loaded: boolean = false;
  private deleteCount = 1;
  constructor(private dataSource: RestDataSource) {}

  private loadOrders() {
    this.loaded = true;
    this.dataSource.getOrders().subscribe((orders) => (this.orders = orders));
  }

  getOrders(): Order[] {
    if (!this.loaded) {
      this.loadOrders();
    }
    return this.orders;
  }

  saveOrder(order: Order): Observable<Order> {
    this.loaded = false;
    return this.dataSource.saveOrder(order);
  }

  updateOrder(order: Order) {
    this.dataSource.updateOrder(order).subscribe((order) => {
      this.orders.splice(
        this.orders.findIndex((o) => o.id == order.id),
        this.deleteCount,
        order
      );
    });
  }

  deleteOrder(id: number) {
    this.dataSource.deleteOrder(id).subscribe((order) => {
      this.orders.splice(
        this.orders.findIndex((o) => id == o.id),
        this.deleteCount
      );
    });
  }
}
