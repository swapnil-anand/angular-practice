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
    this.service
      .getUserByEmailAndPassword(this.email, this.password)
      .subscribe((result) => {
        console.log(result);
        if (result.body) alert('Login Successfull');
        else alert('Invalid Credentials');
      });
  }
}
