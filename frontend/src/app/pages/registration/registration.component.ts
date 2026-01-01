import { Component } from '@angular/core';
import { UserCreate } from '../../models/user/UserCreate';
import { ApiService } from '../../services/api.service';

@Component({
    selector: 'registration',
    templateUrl: 'registration.component.html',
    styleUrl: 'registration.component.css',
    imports: []
})
export class RegistrationComponent {
    private apiService: ApiService;
    
    protected user: UserCreate = new UserCreate(
        '',
        '',
        ''
    )

    constructor(apiService: ApiService) {
        this.apiService = apiService;
    }

    register(): void {
        this.apiService.registerUser(this.user);
    }
}