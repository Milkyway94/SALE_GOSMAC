import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})


export class AppComponent {
    //another prop
    //typescript prop: type
    slogan: string = "Hệ thống quản lý bán hàng";

    pageTitle: string = `Hệ thống quản lý bán hàng`;
}

