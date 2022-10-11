import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { apiUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router, private http: HttpClient) {}
  signup(data: any) {
    return this.http
      .post<any>(`${apiUrl}/auth/signup`, {
        ...data,
      })
      .pipe(
        map((user) => {
          // store user details and basic auth credentials in local storage to keep user logged in between page refreshes
          console.log('USER>>>', user);
          return user;
        })
      );
  }

  signin(data: any) {
    console.log('DATA>>>', data);
    console.log(apiUrl);

    return this.http
      .post<any>(`${apiUrl}/auth/signin`, {
        ...data,
      })
      .pipe(
        map((res) => {
          console.log('Toker>>>', res);
          localStorage.setItem('token', res.access_token);
          return res;
        })
      );
  }
  logoutUser() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    return !!localStorage.getItem('token');
  }
}
