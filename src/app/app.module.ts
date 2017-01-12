import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';

import { AppComponent } from './app.component';
import {ProductService} from './services/product.service';
import {AppMenuComponent} from  './appmenu.component';
import { StorageComponent } from './storage/storage.component'
import {ProductModule} from './product/product.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomerComponent } from './customer/customer.component';
import { ProviderComponent } from './provider/provider.component';
import { ReportComponent } from './report/report.component';
import { SellComponent } from './sell/sell.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProductDetailComponent } from './product/product-detail.component';
// import { ProductComponent } from './product/product.component';
import { ProductEditComponent } from './product/product-edit.component';
import { ProductAddComponent } from './product/product-add.component';
// import {ProductListComponent } from './product/product-list.component';
import { ProductOverviewComponent } from './product/product-overview.component';
import { ProductProjectsComponent } from './product/product-projects.component';
import { UploadFileComponent } from './upload-file/upload-file.component';
import { SettingsComponent } from './settings/settings.component';
// Define the routes

@NgModule({
  declarations: [
    AppComponent,
    AppMenuComponent,
    StorageComponent,
    DashboardComponent,
    CustomerComponent,
    ProviderComponent,
    ReportComponent,
    SellComponent,
    NotfoundComponent,
    ProductDetailComponent,
    // ProductComponent,
    // ProductListComponent,
    ProductAddComponent,
    ProductEditComponent,
    ProductProjectsComponent,
    ProductOverviewComponent,
    UploadFileComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    // RouterModule.forRoot([
    //   //{ path: 'product', component: ProductComponent },
    //   // { path: '', redirectTo: 'product', pathMatch: 'full' },
      
    //   { path: '**', redirectTo: '', pathMatch: 'full' }
    // ]),
    appRoutes,
     ProductModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
