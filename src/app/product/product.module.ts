import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import {ProductListComponent } from './product-list.component';
import {AddProductComponent } from './add-products.component';
import { ProductComponent } from './product.component';
import { ProductService } from './../services/product.service';

@NgModule({
  declarations: [ProductComponent, ProductListComponent, AddProductComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forChild([{ 
      path: 'product',
       component: ProductComponent,
       children: [{ path: '', component: ProductListComponent },
       { path: 'AddProduct', component: AddProductComponent },
      //  { path: 'detail/:id'} //dynamic parameter
      //  canActivate: [ ProductDetailGuard ], //filter
      //  component: ProductDetailComponent },
      ] }
      ])
    ],
  providers:[ProductService]
})
export class ProductModule { }
