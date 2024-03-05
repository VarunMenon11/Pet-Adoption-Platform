import { HttpClient } from '@angular/common/http';
import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
@Component({
selector: 'app-adoption-centers',
  templateUrl: './adoption-centers.component.html',
  styleUrls: ['./adoption-centers.component.css']
})
export class AdoptionCenterComponent implements OnInit {
    adoptionCenters: any[] = [];

    constructor(private http: HttpClient) { }

    ngOnInit(): void {
        this.http.get<any[]>('http://localhost:3000/api/adoption-centers')
            .subscribe(
                (response) => {
                    this.adoptionCenters = response;
                },
                (error) => {
                    console.error('Error fetching adoption center data:', error);
                    // Handle error, e.g., show error message to the user
                }
            );
    }
}
