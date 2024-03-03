import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { PetsComponent } from './pets/pets.component';
import { AdoptionCentersComponent } from './adoption-centers/adoption-centers.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginPageComponent },
  { path: 'welcome', component: WelcomePageComponent },
  { path: 'register', component: RegistrationPageComponent },
  { path: '', component: WelcomePageComponent },
  { path: 'pets', component: PetsComponent },
  { path: 'adoption-centers', component: AdoptionCentersComponent },
  { path: 'profile', component: ProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }




