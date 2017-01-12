import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-permisson',
  templateUrl: './permisson.component.html',
  styleUrls: ['./permisson.component.css']
})
export class PermissonComponent implements OnInit {
  
  slogan: string = "Hệ thống quản lý bán hàng";
  pageTitle: string = `Hệ thống quản lý bán hàng`;
  constructor() { }

  ngOnInit() {
  }

}
