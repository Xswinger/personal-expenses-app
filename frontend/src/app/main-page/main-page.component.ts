import { Component } from '@angular/core';
import { UserMonthlySummary } from '../models/UserMonthlySummary';

@Component({
    selector: 'main-page',
    templateUrl: 'main-page.component.html',
    styleUrl: 'main-page.component.css',
    imports: []
})
export class MainPageComponent {
    protected summary: UserMonthlySummary[] = [];
}