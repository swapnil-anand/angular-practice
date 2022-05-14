import { HttpResponse } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { URL } from '../app-constants/url-constants';
import { User } from '../interfaces/user';

@Injectable()
export class UserServiceService {
  constructor(private http: HttpClient) {}

  getUserByEmailAndPassword(
    email: string,
    password: string
  ): Observable<HttpResponse<String>> {
    return this.http.get<String>(
      URL.GET_USER + `${email}&password=${password}`,
      {
        observe: 'response',
      }
    );
  }

  addUserDetails(user: User): Observable<HttpResponse<boolean>> {
    return this.http.post<boolean>(URL.ADD_USER, user, {
      observe: 'response',
    });
  }
}
