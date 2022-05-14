import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { SingUpPageComponent } from './components/sign-up-page/sign-up-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginPageComponent },
  { path: 'sign-up', component: SingUpPageComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}

export const RoutingComponent = [
  LoginPageComponent,
  PageNotFoundComponent,
  SingUpPageComponent,
];
