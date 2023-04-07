import { RouterModule } from '@angular/router';
import { CartSummaryComponent } from './cartSummary/cartSummary.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { StoreComponent } from './store.component';
import { ModelModule } from '../model/model.module';
import { CounterDirective } from './counter.directive';
import { Cart } from '../model/cart.model';
import { CheckoutComponent } from './checkout/checkout.component';
import { CartDetailComponent } from './cartDetails/cartDetail.component';

@NgModule({
  imports: [ModelModule, BrowserModule, FormsModule, RouterModule],
  declarations: [
    StoreComponent,
    CounterDirective,
    CartSummaryComponent,
    CartDetailComponent,
    CheckoutComponent,
  ],
  providers: [Cart],
  exports: [StoreComponent, CartDetailComponent, CheckoutComponent],
})
export class StoreModule {}
