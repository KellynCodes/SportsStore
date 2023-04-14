import { OrderTableComponent } from './product/orderTable.component';
import { ProductTableComponent } from './product/productTable.component';
import { MaterialFeatures } from './design/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth/auth.guard';
import { ProductEditorComponent } from './product/editProduct.component';

let routing = RouterModule.forChild([
  { path: 'auth', component: AuthComponent },
  {
    path: 'main',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'products/:mode/:id', component: ProductEditorComponent },
      { path: 'products/:mode', component: ProductEditorComponent },
      { path: 'products', component: ProductTableComponent },
      { path: 'orders', component: OrderTableComponent },
      { path: '**', redirectTo: 'products' },
    ],
  },
  { path: '**', redirectTo: 'auth' },
]);

@NgModule({
  imports: [CommonModule, FormsModule, routing, MaterialFeatures],
  declarations: [
    AuthComponent,
    AdminComponent,
    ProductTableComponent,
    ProductEditorComponent,
    OrderTableComponent,
  ],
  providers: [AuthGuard],
})
export class AdminModule {}
