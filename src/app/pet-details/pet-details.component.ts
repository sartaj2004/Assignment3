import { Component, Inject, OnInit } from '@angular/core';
import { Pet } from '../pets';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { PetsDataService } from '../pet.service'; // Assuming PetService is the correct service name
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-pet-details',
  templateUrl: './pet-details.component.html',
  styleUrls: ['./pet-details.component.css']
})
export class PetDetailsComponent implements OnInit {

  pet?: Pet; // It can be undefined initially.

  constructor(@Inject(PetsDataService) private petsDataService: PetsDataService, private activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.pipe(
      switchMap((params: ParamMap) => {
        const idParam = params.get('id'); // idParam is string | null
        if (idParam) {
          const id = Number(idParam);
          // Use switchMap to handle the Observable<Pet>
          return !isNaN(id) ? this.petsDataService.getPet(id) : of(undefined);
        }
        return of(undefined); // Explicitly handle the null case, emitting an undefined observable
      })
    ).subscribe(
      (pet) => {
        if (pet) {
          this.pet = pet; // Ensure pet is not null here before assignment
        } else {
          // Handle the case where pet is not found or id is invalid
          console.error('Pet not found or invalid ID');
        }
      },
      error => console.error('Error fetching pet:', error)
    );
  }
}
