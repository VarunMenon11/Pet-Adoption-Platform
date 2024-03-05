import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http'; // Import HttpClient for making HTTP requests

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})

export class AdminPageComponent {
  adminUsername: string = '';
  adminPassword: string = '';
  loginError: boolean = false;


  constructor(private router: Router, private http: HttpClient) {}

  submitAdminForm() {
    // Send admin username and password to the backend for authentication
    this.http.post<any>('http://localhost:3000/admin/login', { adminUsername: this.adminUsername, adminPassword: this.adminPassword })
      .subscribe(
        (response) => {
          // Admin login successful
          console.log(response);
          // Redirect to admin welcome page
          this.redirectToAdminWelcome();
        },
        (error) => {
          // Admin login failed
          console.error('Error logging in:', error);
          // Handle error, e.g., show error message to the user
          this.loginError = true; // Set loginError to true when login fails

        }
      );
  }
  

  redirectToAdminWelcome() {
    this.router.navigateByUrl('/admin/welcome');
  }
}
