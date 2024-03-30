// pets-list.component.ts
import { Component, OnInit } from '@angular/core';
import { Pet } from '../pets';
import { PetsDataService } from '../pet.service';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pets-list.component.html',
  styleUrls: ['./pets-list.component.css']
})

export class PetListComponent implements OnInit {
  pets: Pet[] = [];
  imageBaseUrl: string = 'http://localhost:8080/images/pets/'; // This should be the base URL where your images are served from

  constructor(private petsDataService: PetsDataService) {}

  ngOnInit() {
    this.petsDataService.getPets().subscribe((data: Pet[]) => {
      this.pets = data;
    });
  }

  getImageUrl(imageName: string): string {
    return this.imageBaseUrl + imageName;
  }
}
