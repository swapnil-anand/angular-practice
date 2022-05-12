import { HttpResponse } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable()
export class UserServiceService {
  private baseUrl = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }

  getUserByUsername(username:string): Observable<HttpResponse<User>> {
    return this.http.get<User>(this.baseUrl + 'user?username=' + username, {
      observe: "response"
    });
  }

  addUserDetails(user:User): Observable<HttpResponse<boolean>> {
    return this.http.post<boolean>(this.baseUrl + 'user/save', user, {
      observe: "response"
    });
  }

  deleteUserByUsername(username:string): Observable<HttpResponse<boolean>>{
    return this.http.delete<boolean>(this.baseUrl + 'user/delete?username=' + username, {
      observe: "response"
    });
  }

}