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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouteConfiguration } from 'src/Router/rootRoute';
@NgModule({
  declarations: [AppComponent, Navbar],
  imports: [
    BrowserModule,
    StoreModule,
    RouteConfiguration,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
