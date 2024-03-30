// pet.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pet } from './pets'; // Adjust the path as per your project structure

@Injectable({
  providedIn: 'root'
})
export class PetsDataService {
  private baseUrl = 'http://localhost:8080/api'; // Base URL for your API

  constructor(private http: HttpClient) { }

  // Fetch all pets
  getPets(): Observable<Pet[]> {
    return this.http.get<Pet[]>(`${this.baseUrl}/pets`);
  }

  // Fetch a single pet by ID
  getPet(id: number): Observable<Pet> {
    return this.http.get<Pet>(`${this.baseUrl}/pets/${id}`);
  }
}
