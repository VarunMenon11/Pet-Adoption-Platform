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
    // Your login logic here
    // For simplicity, let's assume login is successful
    console.log('Login successful');

    // Placeholder condition for checking if the user is an admin
    const isAdmin = this.username === 'admin'; // You can replace this condition with your actual logic

    // Redirect to the appropriate page based on user type
    if (isAdmin) {
      this.router.navigateByUrl('/admin');
    } else {
      // Redirect to the welcome page after successful login
      this.router.navigateByUrl('/welcome');
    }
  }

  switchToAdmin() {
    // Redirect to the admin page
    this.router.navigateByUrl('/admin');
  }
}




