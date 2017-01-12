import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductService } from '../services/product.service';
@Component({
  selector: 'app-product-projects',
  template: `Dự án`
})
export class ProductProjectsComponent implements OnInit {
  constructor(private router: Router, private activatedRoute:ActivatedRoute, public _productService: ProductService) { }

  ngOnInit() {
     
  }
}
