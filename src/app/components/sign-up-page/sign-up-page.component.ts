import { Component, OnInit } from '@angular/core';
import { User } from '../../interfaces/user';
import { UserServiceService } from '../../service/user-service.service';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.css'],
})
export class SingUpPageComponent implements OnInit {
  fullname: string;
  password: string;
  email: string;
  user: User | undefined;

  constructor(private userService: UserServiceService) {}

  addUserDetails() {
    const data = {
      fullname: this.fullname,
      email: this.email,
      password: this.password,
    };
    this.userService.addUserDetails(data).subscribe((result) => {
      if (result.body) alert('Successfully Signed Up.');
      else alert('Failed to Sign up, try again.');
    });
  }

  ngOnInit() {}
}
