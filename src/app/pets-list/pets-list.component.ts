// Start of pets-list.component.ts
import { Component, OnInit } from '@angular/core';
import { Pet } from '../pets';
import { PetsDataService } from '../pets-data.service';

@Component({
  selector: 'app-pets-list',
  templateUrl: './pets-list.component.html',
  styleUrls: ['./pets-list.component.css']
})
export class PetListComponent implements OnInit {
  pets: Pet[] = []; // Initializing the pets array

  constructor(private petsDataService: PetsDataService) {}

  ngOnInit() {
    this.pets = this.petsDataService.getPetList();
  }
}
// End of pets-list.component.ts

