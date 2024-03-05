// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule here
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { PetsComponent } from './pets/pets.component';
import { AdoptionCenterComponent } from './adoption-centers/adoption-centers.component';
import { ProfileComponent } from './profile/profile.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { AdminWelcomePageComponent } from './admin-welcome-page/admin-welcome-page.component';
import { AdminPetComponent } from './admin-pet/admin-pet.component';
import { AdminProComponent } from './admin-pro/admin-pro.component';
import { AdminAdoptionComponent } from './admin-adoption/admin-adoption.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    WelcomePageComponent,
    RegistrationPageComponent,
    PetsComponent,
    AdoptionCenterComponent,
    ProfileComponent,
    AdminPageComponent,
    AdminWelcomePageComponent,
    AdminPetComponent,
    AdminProComponent,
    AdminAdoptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // Add FormsModule to the imports array
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

