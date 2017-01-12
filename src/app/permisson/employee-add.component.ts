import { Component, OnInit } from '@angular/core';
import { ProductService } from './../services/product.service';
import { Router,ActivatedRoute } from '@angular/router';
import {Employee} from '../model/employee'
import {EmployeeService}   from '../services/employee.service'
@Component({
  selector: 'add-employee',
  templateUrl: './employee-add.component.html'
})
export class AddEmployeeComponent implements OnInit {
    public pageTitle="Thêm mới nhân viên";
    public groups:any=[];
    public mods:any=[];
    public emp:Employee;
    constructor(private router: Router, private activatedRouter: ActivatedRoute, private _empService: EmployeeService){

    }
    ngOnInit(){
        this.emp=new Employee();
        this.emp.birthday=new Date();
        this.emp.code='NV';
        this.emp.currentaddress='Hà Nội';
        this.emp.nativeaddress='Nghệ An';
        this.emp.haveChildren=false;
        this.emp.isMarried=false;
        this.emp.CMND='';
        this.emp.code='';
        this.emp.email='';
        this.emp.name='';
    }
    back(){
        this.router.navigate(['/permission']);
    }
    SaveForm(){
        console.log(this.emp);
        this._empService.addEmp(this.emp)
            .subscribe(res=>{
                console.log(res.Data);
                this.router.navigate(['/permission']);
            })
    }
}