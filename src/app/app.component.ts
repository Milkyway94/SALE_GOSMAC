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
    public people:any = [
        {
             name: 'Nguyễn Hữu Thành',
            job: 'IT'
        },
       {
           name: 'Andy Vũ',
           job: 'Doctor'
       },
       {
           name: 'Kendy',
           job: 'CED'
       }
    ]
}

