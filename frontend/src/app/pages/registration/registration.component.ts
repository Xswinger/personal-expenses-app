import { Component, NgModule } from '@angular/core';
import { UserCreate } from '../../models/user/UserCreate';
import { ApiService } from '../../services/api.service';
import { NavigationComponent } from '../../components/navigation/navigation.component';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'registration',
    templateUrl: 'registration.component.html',
    styleUrl: 'registration.component.css',
    imports: [NavigationComponent, FormsModule]
})
export class RegistrationComponent {
    private apiService: ApiService;
    
    // Replace with Form
    protected user = {
        name: '',
        email: '',
        password: ''
    }

    constructor(apiService: ApiService) {
        this.apiService = apiService;
    }

    register(): void {
        // this.apiService.registerUser(this.user);
    }
}