import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PetListComponent } from './pets-list/pets-list.component';
import { PetDetailsComponent } from './pet-details/pet-details.component';
import {FooterComponent} from "./footer/footer.component"; // Import PetDetailsComponent here

@NgModule({
  declarations: [
    AppComponent,
    PetListComponent,
    PetDetailsComponent,
    FooterComponent,
    // Declare PetDetailsComponent here
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
