import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component'; // Import the WelcomePageComponent
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { PetsComponent } from './pets/pets.component';
import { AdoptionCentersComponent } from './adoption-centers/adoption-centers.component';
import { ProfileComponent } from './profile/profile.component';
import { AdminPageComponent } from './admin-page/admin-page.component'; // Import the newly created AdminPageComponent
import { AdminWelcomePageComponent } from './admin-welcome-page/admin-welcome-page.component'; // Import the AdminWelcomePageComponent


const routes: Routes = [
  { path: '', component: LoginPageComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginPageComponent },
  { path: 'welcome', component: WelcomePageComponent },
  { path: 'register', component: RegistrationPageComponent },
  { path: 'pets', component: PetsComponent },
  { path: 'adoption-centers', component: AdoptionCentersComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'admin', component: AdminPageComponent }, 
  { path: 'admin/welcome', component: AdminWelcomePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

