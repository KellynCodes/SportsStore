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
      {
        path: 'admin',
        loadChildren: () =>
          import('./admin/admin.module').then((comp) => comp.AdminModule),
      },
      { path: '**', redirectTo: '/pageNotFound' },
    ]),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
