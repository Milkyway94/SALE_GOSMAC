import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
// import { Product } from './../model/product';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html'
})
export class ProductEditComponent implements OnInit, OnDestroy {
  constructor(public _productService: ProductService, private router: Router, private activatedRouter: ActivatedRoute) { }
  public product: any;
  public id: string;
  public subscription: Subscription;

  ngOnInit() {
    this.subscription = this.activatedRouter.params
      .subscribe(params => {
        this.id = params['id'];
      });

    this._productService.GetSingle(this.id)
      .subscribe((data) => {
        this.product = data;
      });
  }
  SaveForm() {
    this._productService.Update(this.id, this.product)
      .subscribe(response => {
        if (response) {
          alert('Save success');
          this.router.navigate(['/product']);
        }
      })
  }
  // SaveForm(): void{
  //   this._productService.Update(this.product)
  //   .then(() => this.GotoProduct());
  // }
  GotoProduct() {
    this.router.navigate(['/product']);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
