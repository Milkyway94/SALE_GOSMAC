import { Component } from '@angular/core';

@Component({
    selector: 'product',
    template: `<router-outlet></router-outlet>`
})


export class ProductComponent {
    //another prop
    //typescript prop: type
    slogan: string = "Hệ thống quản lý bán hàng";
    
    pageTitle: string = `Hệ thống quản lý bán hàng`;
}