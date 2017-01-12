import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ProductService } from './../services/product.service';
import { AuthGuard } from '../_guards/index';
import {PermissonComponent} from './permisson.component'
import {EmployeeComponent} from './Employee.component'
import {AddEmployeeComponent} from './Employee-add.component'
import {EmpDetailComponent} from './employee-detail.component'
import { EmployeeService } from '../services/employee.service'
import{EmpFilterPipe} from '../pipe/employee.pipe'

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forChild([{ 
      path: 'permission',
      component: PermissonComponent,
      canActivate: [AuthGuard],
       children: [
         { path: '', component: EmployeeComponent },
         { path: 'employeelist', component: EmployeeComponent },
        { path: 'addemployee', component: AddEmployeeComponent },
        { path: 'emp-detail/:id', //dynamic parameter
          //canActivate: [ ProductDetailGuard ], //filter
          component: EmpDetailComponent },
      ]}
  ])],
  declarations: [PermissonComponent, EmployeeComponent, AddEmployeeComponent, EmpDetailComponent, EmpFilterPipe ],
  providers:[EmployeeService]
})
export class PermissonModule { }
