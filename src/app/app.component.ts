import { Component } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  private ApiUrl = 'http://localhost:8080/';
  name = 'Angular';

  constructor(private http: HttpClient) {}

  getUserByUsername() {
    this.http
      .get(this.ApiUrl + 'user' + '?username=' + 'swapnilan')
      .subscribe((result) => console.log(result));
  }

  addUserDetails() {
    var data = {
      username: 'swapnilan',
      name: 'Swapnil Anand',
      email: 'swapnilan@gmail.com',
      language: 'English,Hindi',
      bio: 'NA',
      password: 'Alice123',
    };

    this.http
      .post(this.ApiUrl + 'user/save', data)
      .subscribe((result) => console.log(result));
  }

  deleteUserByUsername() {
    this.http
      .delete(this.ApiUrl + 'user/delete' + '?username=' + 'swapnilan')
      .subscribe((result) => console.log(result));
  }
}
