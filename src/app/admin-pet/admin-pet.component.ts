// admin-pet.component.ts
import { Component, OnInit } from '@angular/core';
import { PetsService } from '../pets.service'; // Import the service to fetch pets

@Component({
  selector: 'app-admin-pet',
  templateUrl: './admin-pet.component.html',
  styleUrls: ['./admin-pet.component.css']
})
export class AdminPetComponent implements OnInit {
  pets: any[] = []; // Array to store pets
  showAddForm: boolean = false; // Flag to show/hide the add pet form
  newPet: any = { name: '', availability: '', location: '', vaccination_info: '', image_path: '' }; // Object to store new pet data

  constructor(private petsService: PetsService) { }

  ngOnInit(): void {
    this.getPets();
  }

  // Fetch pets from the service
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

  // Function to add a new pet
  addPet() {
    // Show the add form when the button is clicked
    this.showAddForm = true;
  }

  // Function to submit the add pet form
  submitForm() {
    // Add the new pet to the pets array
    this.pets.push({
      name: this.newPet.name,
      availability: this.newPet.availability,
      location: this.newPet.location,
      vaccination_info: this.newPet.vaccination_info,
      image_path: this.newPet.image_path
    });

    // Reset the form and hide it
    this.newPet = { name: '', availability: '', location: '', vaccination_info: '', image_path: '' };
    this.showAddForm = false;
  }
}
