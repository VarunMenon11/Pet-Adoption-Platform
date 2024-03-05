import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router, private http: HttpClient) {}

  login() {
    // Make an HTTP POST request to your backend login endpoint
    this.http.post<any>('http://localhost:3000/login', { username: this.username, password: this.password })
      .subscribe(response => {
        // Check if login was successful based on the response from the backend
        if (response.success) {
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
        } else {
          console.log('Login failed');
          // Handle login failure here, e.g., display an error message to the user
        }
      }, error => {
        console.error('Error during login:', error);
        // Handle error here, e.g., display an error message to the user
      });
  }

  switchToAdmin() {
    // Redirect to the admin page
    this.router.navigateByUrl('/admin');
  }
}
