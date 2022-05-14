import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../../service/user-service.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  email: string;
  password: string;

  constructor(private service: UserServiceService) {}

  ngOnInit() {}

  login() {
    let login = {
      email: this.email,
      password: this.password,
    };

    this.service
      .getUserByEmailAndPassword(this.email, this.password)
      .subscribe((result) => {
        if (result.body == 'Successful') alert('Login Successfull');
        else alert('Invalid Credentials');
      });
  }
}
