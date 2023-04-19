import { NgModule } from '@angular/core';
import { ProductRepository } from '../data/Repository/product.repository';
import { StaticDataSource } from '../data/static.datasource';
import { Cart } from './cart.model';
import { Order } from './order.model';
import { OrderRepository } from '../data/Repository/order.repository';

import { RestDataSource } from '../data/rest.datasource';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from '../Services/auth.services';
@NgModule({
  imports: [HttpClientModule],
  providers: [
    ProductRepository,
    StaticDataSource,
    Cart,
    Order,
    OrderRepository,
    { provide: StaticDataSource, useClass: RestDataSource },
    RestDataSource,
    AuthService,
  ],
})
export class ModelModule {}
