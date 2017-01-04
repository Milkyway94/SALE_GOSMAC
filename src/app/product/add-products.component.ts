import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from './../services/product.service';
import { Product } from './../model/product';
// import { Subscription } from 'rxjs';
@Component({
  selector: 'add-product',
  templateUrl: './add-products.component.html'
})
export class AddProductComponent implements OnInit {
  public _id: number;
  // public subscription: Subscription;
  public product: Product;
  constructor(
    private router: Router, private activatedRouter: ActivatedRoute,
    public productService: ProductService
  ) {}

  ngOnInit() {
    this.product = new Product("","Sản phẩm 1","","","",0,0,0,"","","","","","","",0,0,"","",false);
  }
  GotoProduct(){
    this.router.navigate(['/product']);
  }
  SaveForm(){
    this.productService.Add(this.product)
    .map(res => {
      if(res){
        alert("Thêm mới thành công");
        this.router.navigate(['/product']);
      }
    });
  }
  // ngOnDestroy(){
  //   this.subscription.unsubscribe();
  // }

}
