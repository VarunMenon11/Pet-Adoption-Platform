import { Component, OnInit } from '@angular/core';
import { PetsService } from '../pets.service'; // Import the service to fetch pets

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {
  pets: any[] = []; // Assuming each pet is an object with properties like imageUrl, name, availability, location, and vaccinationInfo

  constructor(private petsService: PetsService) { }

  ngOnInit(): void {
    this.getPets();
  }

  getPets() {
    this.petsService.getPets().subscribe(
      (data) => {
        this.pets = data; // Assign fetched pets to the pets array
      },
      (error) => {
        console.error('Error fetching pets:', error);
      }
    );
  }
}

