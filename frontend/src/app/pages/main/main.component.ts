import { Component } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { NavigationComponent } from '../../components/navigation/navigation.component';
import { UserMonthlySummary } from '../../models/UserMonthlySummary';

@Component({
    selector: 'main',
    templateUrl: 'main.component.html',
    styleUrl: 'main.component.css',
    imports: [NavigationComponent, CurrencyPipe]
})
export class MainComponent {
    protected summary: UserMonthlySummary[] = [];
}