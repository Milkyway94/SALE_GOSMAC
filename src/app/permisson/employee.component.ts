import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './../services/employee.service';
import { Router } from '@angular/router';
import { Group } from '../model/group'
@Component({
    selector: 'employee',
    templateUrl: './employee.component.html'
})
export class EmployeeComponent implements OnInit {
    constructor(private empService: EmployeeService) { }
    public pageTitle = "Quản lý nhân viên";
    public cats = [];
    public emps = [];
    public countMsg: number;
    public showImage = false;
    public selectedCat: any;
    public loadding: boolean;
    public AllEmps:any;
    ngOnInit() {
        this.loadding = true;
        this.selectedCat = null;
        this.empService.getAllEmp()
            .subscribe(emps => {
                this.emps = emps.Data;
                this.countMsg = emps.Message;
                this.loadding = false;
                this.AllEmps=this.emps;
            });
        this.empService.getGroup()
            .subscribe(group => {
                this.cats = group.Data;
                this.loadding = false;
            })
            
    };
    GetEmpFromGroup() {
        this.loadding = true;
        if (this.selectedCat != 0) {
            this.emps = this.emps.filter(
                x=>x.EmpGroups.filter(x=>x.G_ID==this.selectedCat.G_ID).length>0
            );
            this.loadding = false;
        }
        else{
            this.emps=this.AllEmps;
            this.loadding = false;
        }
    }
}