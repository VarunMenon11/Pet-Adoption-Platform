import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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

  constructor(private http: HttpClient, private router: Router) {}

  register() {
    const userData = {
      fullname: this.fullname,
      email: this.email,
      password: this.password
    };
    this.http.post<any>('http://localhost:3000/register', userData)
      .subscribe(
        (response) => {
          console.log('Registration successful');
          this.router.navigateByUrl('/login');
        },
        (error) => {
          console.error('Error registering user:', error);
        }
      );
  }
}
