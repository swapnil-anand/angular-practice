import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UserServiceService } from './service/user-service.service';
import { SingUpPageComponent } from './components/sign-up-page/sign-up-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [AppComponent, SingUpPageComponent, LoginPageComponent],
  bootstrap: [AppComponent],
  providers: [UserServiceService],
})
export class AppModule {}
