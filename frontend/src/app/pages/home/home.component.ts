import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule, CurrencyPipe, DatePipe } from '@angular/common';
import { NavigationComponent } from '../../components/navigation/navigation.component';
import { Expense } from '../../models/expense/Expense';
import { StubService } from '../../services/stub.service';
import { Category } from '../../models/Category';

@Component({
    selector: 'home',
    templateUrl: 'home.component.html',
    styleUrl: 'home.component.css',
    imports: [FormsModule, DatePipe, CurrencyPipe, NavigationComponent, CommonModule]
})
export class HomeComponent {
    private stubService: StubService;

    protected expenses: Expense[] = [];
    protected filters = {
        fromDate: '',
        toDate: '',
        category: ''
    };

    protected categories = Object
        .keys(Category)
        .filter(key => isNaN(Number(key)))

    protected totalAmount = 0;

    constructor(stubService: StubService) {
        this.stubService = stubService;

        this.stubService.getExpenses().subscribe((expenses) => {
            this.expenses = expenses;
            this.totalAmount = expenses.reduce((acc, cur) => acc + cur.getAmount, 0);
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