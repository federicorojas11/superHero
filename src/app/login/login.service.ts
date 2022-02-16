import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  loginUser(user: any) {
    /* return this.http.post('http://challenge-react.alkemy.org/', user)... */
    if (user.email === 'challenge@alkemy.org' && user.password === 'angular') {
      let token = Math.random().toString(36);
      localStorage.setItem('token', token);
      return token;
    } else return false;
  }
}
