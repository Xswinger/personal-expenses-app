import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { NavigationComponent } from '../../components/navigation/navigation.component';
import { Expense } from '../../models/expense/Expense';
import { StubService } from '../../services/stub.service';

@Component({
    selector: 'home',
    templateUrl: 'home.component.html',
    styleUrl: 'home.component.css',
    imports: [FormsModule, DatePipe, CurrencyPipe, NavigationComponent]
})
export class HomeComponent {
    private stubService: StubService;
    protected expenses: Expense[] = [];

    filters = {
        fromDate: '',
        toDate: '',
        category: ''
    };

    totalAmount = 0;

    constructor(stubService: StubService) {
        this.stubService = stubService;
        this.stubService.getExpenses().subscribe((expenses) => {
            this.expenses = expenses;
        })
    }

    applyFilters() {

    }

    resetFilters() {

    }

    addExpense() {

    }

    editExpense(expense: Expense) {

    }

    deleteExpense(expenseId: number) {

    }
}