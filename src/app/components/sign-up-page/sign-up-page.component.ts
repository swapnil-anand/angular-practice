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
  userProfile: File;
  isProfilePictureUploaded: boolean;
  isProfileCreated: boolean;

  public form = {
    file: FileList,
  };

  constructor(private userService: UserServiceService) {
    this.form = {
      file: null,
    };
  }

  addUserDetails() {
    const data = {
      fullName: this.fullname,
      email: this.email,
      password: this.password,
    };
    this.userService
      .addUserDetails(data, this.form)
      .subscribe((result) => (this.isProfileCreated = result.body));

    if (this.isProfileCreated) alert('Profile Successfully Created!');
    else alert('Error Occured while creating profil.');
  }

  ngOnInit() {}
}
