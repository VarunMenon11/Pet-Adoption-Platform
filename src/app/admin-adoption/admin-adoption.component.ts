import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-adoption',
  templateUrl: './admin-adoption.component.html',
  styleUrls: ['./admin-adoption.component.css']
})
export class AdminAdoptionComponent implements OnInit {
  adoptionCenters: any[] = [];


  constructor() { }

  ngOnInit(): void {
        // Fetch adoption center data from backend or use mock data
        this.adoptionCenters = [
          { id: 1, name: 'Center 1', location: 'Location 1', contact: 'Contact 1' },
          { id: 2, name: 'Center 2', location: 'Location 2', contact: 'Contact 2' },
          { id: 3, name: 'Center 3', location: 'Location 3', contact: 'Contact 3' },
          // Add more adoption center details as needed
        ];
  }

}

