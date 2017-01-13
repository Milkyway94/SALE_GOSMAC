import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductService } from '../services/product.service';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
})
export class ProductDetailComponent implements OnInit, OnDestroy {
  public id: string;
  public subscription: Subscription;
  public product: any;
  constructor(private router: Router, private activatedRoute: ActivatedRoute, public _productService: ProductService) { }

  ngOnInit() {
    this.subscription = this.activatedRoute.params
      .subscribe(params => {
        this.id = params['id'];
        //alert(this.id);
      });

    this._productService.GetSingle(this.id)
      .subscribe((data) => {
        this.product = data;
        //alert(this.product);
      });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  GotoProduct() {
    this.router.navigate(['/product']);
  }

}
