import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
import {User} from '../model/user';

@Injectable()
export class AuthService {
    public token: string;

    constructor(private http: Http) {
        // set token if saved in local storage
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }

    login(user:User): Observable<any> {
        console.log(user);
        return this.http.post('/api/authenticate', user)
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                console.log(response.json());
                let token = response.json() && response.json().token;
                if (token) {
                    // set token property
                    this.token = token;

                    // store username and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify({ username: user.username, token: token }));

                    // return true to indicate successful login
                    return {res:true, Message: response.json().Message};
                } else {
                    // return false to indicate failed login
                    return {res:false, Message: response.json().Message};
                }
            });
    }

    logout(): void {
        // clear token remove user from local storage to log user out
        this.token = null;
        localStorage.removeItem('currentUser');
    }
}