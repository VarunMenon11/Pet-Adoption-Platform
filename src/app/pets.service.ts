// pets.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PetsService {

  private apiUrl = 'http://localhost:3000/api/pets';

  constructor(private http: HttpClient) { }

  getPets() {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Implement other CRUD operations as needed
}
