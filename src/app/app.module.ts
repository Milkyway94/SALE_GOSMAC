import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ProductService } from './services/product.service';
import { AppMenuComponent } from './appmenu.component';
import { StorageComponent } from './storage/storage.component'

import { ProductModule } from './product/product.module';
import { PermissonModule } from './permisson/permisson.module';
import { WelcomeComponent } from './welcome/welcome.component';

import { AuthGuard } from './_guards/index';

//back

import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';
import { LoginComponent } from './login/login.component';
import { AuthService } from './services/Authentication.service';


// Define the routes

@NgModule({
  declarations: [
    AppComponent,
    AppMenuComponent,
    StorageComponent,
    WelcomeComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent, canActivate: [AuthGuard]  },
      { path: 'login', component: LoginComponent },
      
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ]),
    ProductModule,
    PermissonModule
  ],
  providers: [ProductService, AuthGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
