import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import {ProductListComponent } from './product-list.component';
import {ProductFilterPipe } from './product-filter.pipe';
import { ProductComponent } from './product.component';
import { ProductService } from './../services/product.service';
import { AuthGuard } from '../_guards/index';

@NgModule({
  declarations: [ProductComponent, ProductListComponent, ProductFilterPipe],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forChild([{ 
      path: 'product',
       component: ProductComponent,
       canActivate: [AuthGuard],
       children: [{ path: '', component: ProductListComponent },
      //  { path: 'product-add', component: AddProductComponent },
      //  { path: 'product-edit/:id', component: ProductEditComponent },
      //  { path: 'detail/:id'} //dynamic parameter
      //  canActivate: [ ProductDetailGuard ], //filter
      //  component: ProductDetailComponent },
      ] }
      ])
    ],
  providers:[ProductService]
})
export class ProductModule { }
