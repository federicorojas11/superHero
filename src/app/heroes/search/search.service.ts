import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SearchService {
  endpoint = 'https://www.superheroapi.com/api.php/923777511838288/search/I';
  constructor(private http: HttpClient) {}

  getHeroes(): Observable<any[]> {
    return this.http.get<any[]>(this.endpoint);
  }
}
