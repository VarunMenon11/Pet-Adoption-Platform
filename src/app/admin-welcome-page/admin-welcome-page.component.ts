import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-welcome-page',
  templateUrl: './admin-welcome-page.component.html',
  styleUrls: ['./admin-welcome-page.component.css']
})
export class AdminWelcomePageComponent {
  constructor() {}

  edit() {
    // Logic for handling edit functionality
    console.log('Edit function triggered');
    // You can add further logic here, such as showing/hiding edit options for profile, pets, and adoption centers
  }
}
