import { Component } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { NavigationComponent } from '../../components/navigation/navigation.component';
import { UserMonthlySummary } from '../../models/UserMonthlySummary';
import { User } from '../../models/user/User';
import { StubService } from '../../services/stub.service';

@Component({
    selector: 'main',
    templateUrl: 'main.component.html',
    styleUrl: 'main.component.css',
    imports: [NavigationComponent, CurrencyPipe, CommonModule]
})
export class MainComponent {
    protected summaries: UserMonthlySummary[] = [];
    protected users: User[] = [];

    private stubService: StubService;

    constructor(stubService: StubService) {
        this.stubService = stubService;

        this.stubService.getUsers().subscribe((users) => {
            this.users = users;
        })
        this.stubService.getDashboard().subscribe((summary) => {
            this.summaries = summary;
        })
    }
}