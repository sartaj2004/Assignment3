// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PetDetailsComponent } from './pet-details/pet-details.component'; // Import PetDetailsComponent
import { PetListComponent } from './pets-list/pets-list.component'; // Import PetListComponent

const routes: Routes = [
  { path: '', component: PetListComponent },
  { path: 'pets/:id', component: PetDetailsComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
