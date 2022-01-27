import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  endpoint = 'https://superheroapi.com/api/923777511838288';

  constructor(private http: HttpClient) {
    localStorage.setItem('logged', 'false');
  }

  loginUser(user: any) {
    /* return this.http.post('http://challenge-react.alkemy.org/', user).pipe(
      catchError((error) => {
        console.error('user or password is incorrect', error);
        loadingError$.next(true);
        return of();
      })
    );*/

    if (user.email == 'challenge@alkemy.org' && user.password == 'angular')
      return true;
    else return false;
  }

  getLogged() {
    return localStorage.getItem('logged');
  }

  setLogged(value: boolean): void {
    localStorage.setItem('logged', `${value}`);
  }
}
