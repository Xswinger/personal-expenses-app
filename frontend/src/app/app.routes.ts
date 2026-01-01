import { Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { HomeComponent } from './pages/home/home.component';
import { RegistrationComponent } from './pages/registration/registration.component';

export const routes: Routes = [
    { path: "main", component: MainComponent },
    { path: "home", component: HomeComponent },
    { path: "registration", component: RegistrationComponent },
    { path: "**", component: MainComponent},
];
