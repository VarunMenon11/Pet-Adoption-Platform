import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})
export class RegistrationPageComponent {
  fullname: string = '';
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  register() {
    // Your registration logic here
    // For simplicity, let's assume registration is successful
    console.log('Registration successful');
    // Navigate back to the login page
    this.router.navigateByUrl('/login');
  }
}
