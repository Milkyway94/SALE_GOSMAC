import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/authentication.service';
import { Router, ActivatedRoute } from '@angular/router';
import {User} from '../model/user';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService],
})
export class LoginComponent implements OnInit {
  public  user:User;
  loading:boolean;
  constructor(private _authService:AuthService,private router: Router, private activatedRouter: ActivatedRoute,) { }

  ngOnInit() {
      this.user=new User();
  }
  login(){
    this.loading=true;
    console.log(this.user); 
    this._authService.login(this.user)
    .subscribe(res=>{
      if(res.res === true){
        alert(res.Message);
          this.router.navigate(['/welcome']);
      }
        else{
          alert(res.Message);
          this.router.navigate(['/login']);
        }
        this.loading=false;
    })
  }
}
