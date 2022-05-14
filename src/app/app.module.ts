import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UserServiceService } from './service/user-service.service';

import { AppRoutingModule, RoutingComponent } from './app-routing.module';
import { GalleryComponent } from './components/gallery/gallery.component';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModule],
  declarations: [AppComponent, RoutingComponent, GalleryComponent],
  bootstrap: [AppComponent],
  providers: [UserServiceService],
})
export class AppModule {}
