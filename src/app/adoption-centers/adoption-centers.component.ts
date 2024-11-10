import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-adoption-centers',
  templateUrl: './adoption-centers.component.html',
  styleUrls: ['./adoption-centers.component.css']
})
export class AdoptionCenterComponent implements OnInit {
  adoptionCenters: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // Fetch adoption center data from backend
    this.http.get<any[]>('http://localhost:3000/api/adoption-centers')
      .subscribe(
        (data) => {
          this.adoptionCenters = data;
        },
        (error) => {
          console.error('Error fetching adoption center data:', error);
          // Handle error, e.g., show error message to the user
        }
      );
  }
}
