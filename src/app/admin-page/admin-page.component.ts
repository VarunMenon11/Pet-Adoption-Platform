import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent {
  adminUsername: string = '';
  adminPassword: string = '';

  constructor(private router: Router) {}

  submitAdminForm() {
    // Handle form submission logic here
    console.log('Admin form submitted');
    console.log('Admin Username:', this.adminUsername);
    console.log('Admin Password:', this.adminPassword);

    // You can add further logic like sending form data to backend, etc.
  }

  redirectToAdminWelcome() {
    this.router.navigateByUrl('/admin/welcome');
  }
}
