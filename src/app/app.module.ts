// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { PetListComponent } from './pets-list/pets-list.component'; // Renamed FlowerIndexComponent to PetListComponent
import { PetDetailsComponent } from './pet-details/pet-details.component'; // Renamed FlowerDetailsComponent to PetDetailsComponent

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    PetListComponent, // Renamed FlowerIndexComponent to PetListComponent
    PetDetailsComponent // Renamed FlowerDetailsComponent to PetDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
