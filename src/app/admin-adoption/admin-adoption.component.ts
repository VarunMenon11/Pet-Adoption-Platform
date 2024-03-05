import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin-adoption',
  templateUrl: './admin-adoption.component.html',
  styleUrls: ['./admin-adoption.component.css']
})
export class AdminAdoptionComponent implements OnInit {
  adoptionCenters: any[] = [];
  showAddForm: boolean = false;
  newCenter: any = { location: '', phone: '', pincode: '' };
  buttonHover: boolean = false; // Declare buttonHover property

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
      this.fetchAdoptionCenters();
  }

  fetchAdoptionCenters() {
      this.http.get<any[]>('http://localhost:3000/api/adoption-centers')
          .subscribe(
              (data) => {
                  this.adoptionCenters = data;
              },
              (error) => {
                  console.error('Error fetching adoption center data:', error);
              }
          );
  }

  addAdoption() {
      this.showAddForm = true;
  }

  submitForm() {
    // Send a POST request to add the new adoption center
    this.http.post<any>('http://localhost:3000/api/adoption-centers', this.newCenter)
        .subscribe(
            (response) => {
                console.log('Adoption center added successfully:', response);
                // Optionally, you can refresh the list of adoption centers after adding
                this.fetchAdoptionCenters();
            },
            (error) => {
                console.error('Error adding adoption center:', error);
                // Handle error, e.g., show error message to the user
            }
        );
}

}

