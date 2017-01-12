// components/toolbar.component.ts
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'toolbar',
  template: `
    <div class="toolbar">
      <button (click)="auth.login()">Login</button>
      <button (click)="auth.logout()">Logout{{username}}</button>
    </div>
  `,
})
export class WelcomeComponent {
  public username:string;
  ngOnInit(){
    this.username=JSON.parse(localStorage.getItem("currentUser")).username;
  }
}
