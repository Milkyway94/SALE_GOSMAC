import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import {ProductService} from './services/product.service';
import {AppMenuComponent} from  './appmenu.component';
import { StorageComponent } from './storage/storage.component'

import {ProductModule} from './product/product.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { ToturialComponent } from './toturial/toturial.component';
import { ProductDetailComponent } from './product-detail/product-detail.component'
// Define the routes

@NgModule({
  declarations: [
    AppComponent,
    AppMenuComponent,
    StorageComponent,
    WelcomeComponent,
    ToturialComponent,
    ProductDetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      //{ path: 'product', component: ProductComponent },
      // { path: '', redirectTo: 'product', pathMatch: 'full' },
      
      { path: '**', redirectTo: '', pathMatch: 'full' }
    ]),
    ProductModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
