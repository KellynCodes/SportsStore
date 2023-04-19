import { ProductRepository } from './../../data/Repository/product.repository';
import { Product } from './../../model/product.model';
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  templateUrl: 'productEditor.component.html',
})
export class ProductEditorComponent {
  editing: boolean = false;
  product: Product = {};
  constructor(
    private repository: ProductRepository,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) {}

  public setEdit(): boolean {
    if (this.editing == false) {
      this.editing = true;
      this.setRoute();
      return true;
    } else {
      this.editing = false;
      return false;
    }
  }

  private setRoute(): void {
    if (this.editing) {
      Object.assign(
        this.product,
        this.repository.getProduct(this.activeRoute.snapshot.params['id'])
      );
    }
  }

  public save() {
    this.repository.saveProduct(this.product);
    this.router.navigateByUrl('/admin/main/products');
  }
}
