import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { StoreModule } from './store/store.module';
import { StoreComponent } from './store/store.component';
import { RouterModule } from '@angular/router';
import { CartDetailComponent } from './store/cartDetails/cartDetail.component';
import { CheckoutComponent } from './store/checkout/checkout.component';
import { pageNotFound } from './error/404.component';
import { Home } from './home/home.component';
import { Navbar } from './navbar/navbar.component';
@NgModule({
  declarations: [AppComponent, Navbar],
  imports: [
    BrowserModule,
    StoreModule,
    RouterModule.forRoot([
      { path: '', component: Home },
      { path: 'home', component: Home },
      { path: 'store', component: StoreComponent },
      { path: 'cart', component: CartDetailComponent },
      { path: 'checkout', component: CheckoutComponent },
      { path: 'pageNotFound', component: pageNotFound },
      { path: '**', redirectTo: '/pageNotFound' },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
