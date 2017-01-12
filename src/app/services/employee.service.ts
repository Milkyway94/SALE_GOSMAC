import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise'
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Employee } from './../model/Employee';

@Injectable()
export class EmployeeService {

  constructor(private http: Http) { }
  getAllEmp() {
    return this.http.get("/api/employee")
      .map(res=>res.json());
  }
   getEmpFromGroup(gid) {
    return this.http.post("/api/employeeFromGroup/", {gid: gid})
      .map(res=>res.json());
  }
  getGroup(){
     return this.http.get("/api/group")
      .map(res=>res.json());
  }
  addEmp(emp:Employee){
    console.log("emp_service");
    return this.http.post('/api/employee', emp)
      .map(res=>res.json());
  }

}
