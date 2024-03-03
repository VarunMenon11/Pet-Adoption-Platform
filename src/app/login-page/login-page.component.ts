import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  login() {
    // Your authentication logic here
    // For simplicity, let's assume login is successful
    this.router.navigateByUrl('/welcome');
  }
}
