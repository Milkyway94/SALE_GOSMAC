import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from './../services/product.service';
import { Product } from './../model/product';
// import { Subscription } from 'rxjs';
@Component({
  selector: 'add-product',
  templateUrl: './product-add.component.html'
})
export class ProductAddComponent implements OnInit {
  public _id: number;
  // public subscription: Subscription;
  public product: Product;
  constructor(
    private router: Router, private activatedRouter: ActivatedRoute,
    public productService: ProductService
  ) {}
  title : string ="Kho hàng";
  ngOnInit() {
    this.product = new Product("","Sản phẩm 1","","","",0,0,0,"","","","","","","",0,0,"","",false);
  }
  GotoProduct(){
    this.router.navigate(['/product']);
  }
  SaveForm(){
    this.productService.Add(this.product)
    .subscribe(res => {
      console.log(res);
        alert("Thêm mới thành công");
        this.router.navigate(['/product']);
    });
  }
  // ngOnDestroy(){
  //   this.subscription.unsubscribe();
  // }

}
