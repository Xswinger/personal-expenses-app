import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { API_URL } from "../consts/api";
import { User } from "../models/user/User";
import { UserCreate } from "../models/user/UserCreate";
import { Expense } from "../models/expense/Expense";
import { ExpenseCreate } from "../models/expense/ExpenseCreate";
import { UserMonthlySummary } from "../models/UserMonthlySummary";

@Injectable({ providedIn: 'root' })
export class ApiService {
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
        return this.http.get(API_URL.USERS);
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
        return this.http.get(API_URL.EXPENSES)
    }

    addExpense(expense: ExpenseCreate): Observable<any> {
        return this.http.post(API_URL.EXPENSES, expense)
    }

    getExpense(id: number): Observable<any> {
        return this.http.get(`${API_URL.EXPENSES}/${id}/`)
    }

    updateExpense(expense: Expense): Observable<any> {
        return this.http.put(`${API_URL.USERS}/${expense.getId}/`, expense)
    }

    deleteExpense(id: number): Observable<any> {
        return this.http.delete(`${API_URL.USERS}/${id}/`);
    }

    getMontlyStatistic(): Observable<UserMonthlySummary[]> {
        return this.http.get(API_URL.GET_MONTHLY_STATISTIC);
    }

    getDashboard() {
        this.http.get(API_URL.GET_DASHBOARD)
    }

}