import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UserServiceService } from './service/user-service.service';

import { AppRoutingModule, RoutingComponent } from './app-routing.module';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModule],
  declarations: [AppComponent, RoutingComponent],
  bootstrap: [AppComponent],
  providers: [UserServiceService],
})
export class AppModule {}
