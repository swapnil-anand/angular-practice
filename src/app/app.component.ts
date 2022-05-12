import { Component } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { User } from './interfaces/user';
import { UserServiceService } from './service/user-service.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  username: string;
  user: User | undefined;

  constructor(
    private http: HttpClient,
    private userService: UserServiceService
  ) {}

  getUserByUsername() {
    console.log(this.username);
    this.userService
      .getUserByUsername(this.username)
      .subscribe((result) => (this.user = { ...result.body }));
    console.log(this.user);
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

    this.userService.addUserDetails(data).subscribe((result) => {
      if (result.body) alert('User Added');
      else alert('Failed to add user');
    });
  }

  deleteUserByUsername() {
    this.userService.deleteUserByUsername(this.username).subscribe((result) => {
      if (result.body) alert('User Deleted');
      else alert('Failed to Delete user');
    });
  }
}
