import { pageNotFound } from './../app/error/404.component';
import { CheckoutComponent } from './../app/store/checkout/checkout.component';
import { CartDetailComponent } from './../app/store/cartDetails/cartDetail.component';
import { StoreComponent } from './../app/store/store.component';
import { Home } from './../app/home/home.component';
import { RouterModule } from '@angular/router';

export const RouteConfiguration = RouterModule.forRoot([
  { path: '', component: Home },
  { path: 'home', component: Home },
  { path: 'store', component: StoreComponent },
  { path: 'cart', component: CartDetailComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'pageNotFound', component: pageNotFound },
  {
    path: 'admin',
    loadChildren: () =>
      import('../app/admin/admin.module').then((comp) => comp.AdminModule),
  },
  { path: '**', redirectTo: '/pageNotFound' },
]);
