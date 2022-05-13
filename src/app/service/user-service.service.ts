import { HttpResponse } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { URL } from '../app-constants/url-constants';
import { User } from '../interfaces/user';

@Injectable()
export class UserServiceService {
  constructor(private http: HttpClient) {}

  getUserByEmail(email: string): Observable<HttpResponse<User>> {
    return this.http.get<User>(URL.GET_USER + email, {
      observe: 'response',
    });
  }

  addUserDetails(user: User): Observable<HttpResponse<boolean>> {
    return this.http.post<boolean>(URL.ADD_USER, user, {
      observe: 'response',
    });
  }

  deleteUserByUsername(email: string): Observable<HttpResponse<boolean>> {
    return this.http.delete<boolean>(URL.DELETE_USER + email, {
      observe: 'response',
    });
  }
}
