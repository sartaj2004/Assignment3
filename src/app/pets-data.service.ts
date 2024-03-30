// pets-data.service.ts
import { Injectable } from '@angular/core';
import { Pet } from './pets';
import { catalog } from './catalog-data';

@Injectable({
  providedIn: 'root'
})
export class PetsDataService {
  private pets: Pet[] = [];

  constructor() {
    catalog._embedded.pets.forEach((petJson: any) => {
      this.pets.push(PetsDataService.json2Pet(petJson));
    });
  }

  private static imageFolder = 'assets/Images/pets/';

  private static json2Pet(petJson: any): Pet {
    const pet: Pet = new Pet();
    pet.id = petJson.id;
    pet.name = petJson.name;
    pet.petKind = petJson.petKind;
    pet.age = petJson.age;
    pet.image = PetsDataService.imageFolder + petJson.image;
    pet.ownerId = petJson.ownerId;
    return pet;
  }

  public getPetList(): Pet[] {
    return this.pets;
  }

  public getPet(id: number): Pet | undefined {
    return this.pets.find(pet => pet.id === id);
  }
}
