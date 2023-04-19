import { ProductRepository } from './../../data/Repository/product.repository';
import { Product } from './../../model/product.model';
import { MatTableDataSource } from '@angular/material/table';
import {
  Component,
  IterableDiffer,
  IterableDiffers,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { ProductEditorComponent } from './editProduct.component';
@Component({
  templateUrl: 'productTable.component.html',
})
export class ProductTableComponent {
  colsAndRows: string[] = ['id', 'name', 'category', 'price', 'buttons'];
  dataSource = new MatTableDataSource<Product>(this.repository.getProducts());
  differ: IterableDiffer<Product>;
  @ViewChild(MatPaginator)
  paginator?: MatPaginator;

  constructor(
    private repository: ProductRepository,
    differs: IterableDiffers,
    private prodEditor: ProductEditorComponent
  ) {
    this.differ = differs.find(this.repository.getProducts()).create();
  }
  ngDoCheck(): void {
    let changes = this.differ?.diff(this.repository.getProducts());
    if (changes != null) {
      this.dataSource.data = this.repository.getProducts();
    }
  }

  ngAfterViewInit(): void {
    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
    }
  }

  deleteProduct(id: number): void {
    this.repository.deleteProduct(id);
  }

  public toggleEditing(): void {
    this.prodEditor.setEdit();
  }
}
