import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { API_URL } from "../consts/api";
import { User } from "../models/user/User";
import { UserCreate } from "../models/user/UserCreate";
import { Expense } from "../models/expense/Expense";
import { ExpenseCreate } from "../models/expense/ExpenseCreate";
import { UserMonthlySummary } from "../models/UserMonthlySummary";
import { Category } from "../models/Category";
import { PaymentMethod } from "../models/PaymentMethod";

@Injectable({ providedIn: 'root' })
export class StubService {
    private http: HttpClient;

    constructor(http: HttpClient) {
        this.http = http;
    }

    registerUser(userCreate: UserCreate) {
        return this.http.post(API_URL.REGISTER, userCreate);
    }

    loginUser() {
        return this.http.post(API_URL.LOGIN, {});
    }

    getUsers(): Observable<User[]> {
        return of([
            new User(1, 'xswinger', 'xswinger@mail.ru'), 
            new User(2, 'turis', 'turis@mail.ru')
        ])
    }

    addUser(userCreate: UserCreate): Observable<any> {
        return this.http.post(API_URL.USERS, userCreate);
    }

    getUser(id: number): Observable<any> {
        return this.http.get(`${API_URL.USERS}/${id}/`)
    }

    updateUser(user: User): Observable<any> {
        return this.http.put(`${API_URL.USERS}/${user.getId}/`, user)
    }

    deleteUser(id: number): Observable<any> {
        return this.http.delete(`${API_URL.USERS}/${id}/`, {})
    }

    getExpenses(): Observable<Expense[]> {
        return of([
            new Expense(
                1,
                1,
                Category.FOOD,
                1200,
                new Date('2025-01-10'),
                'Продукты',
                PaymentMethod.CARD
            ),
            new Expense(
                2,
                1,
                Category.VEHICLE,
                300,
                new Date('2025-01-12'),
                'Метро',
                PaymentMethod.OTHER
            )
        ]);
    }

    addExpense(expense: ExpenseCreate): Observable<any> {
        return this.http.post(API_URL.EXPENSES, expense)
    }

    getExpense(id: number): Observable<Expense> {
        return of(
            new Expense(
                2,
                1,
                Category.VEHICLE,
                300,
                new Date('2025-01-12'),
                'Метро',
                PaymentMethod.OTHER
            )
        )
    }

    updateExpense(expense: Expense): Observable<any> {
        return this.http.put(`${API_URL.USERS}/${expense.getId}/`, expense)
    }

    deleteExpense(id: number): Observable<any> {
        return this.http.delete(`${API_URL.USERS}/${id}/`);
    }

    getMontlyStatistic(): Observable<UserMonthlySummary[]> {
        return of([
            new UserMonthlySummary(
                1, 'xswinger', 100
            ),
            new UserMonthlySummary(
                1, 'turis', 200
            ) 
        ]);
    }

    getDashboard(): Observable<any> {
        return this.http.get(API_URL.GET_DASHBOARD);
    }

}