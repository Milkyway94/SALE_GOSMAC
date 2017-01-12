import { Component, OnInit } from '@angular/core';
import { ProductService } from './../services/product.service';
import { Router } from '@angular/router';
@Component({
  selector: 'employee-detail',
  templateUrl: './employee-detail.component.html'
})
export class EmpDetailComponent implements OnInit {
    constructor(){

    }
    public pageTitle="Quản lý nhân viên";
    public cats=[];
    public emps=[];
    public showImage=false;
    ngOnInit(){
        
    }
}