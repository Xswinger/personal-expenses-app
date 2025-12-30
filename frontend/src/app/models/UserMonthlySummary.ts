export class UserMonthlySummary {
    private user_id: number;
    private username: string;
    private total_expenses_last_month: number;

    constructor(user_id: number, username: string, total_expenses_last_month: number) {
        this.user_id = user_id;
        this.username = username;
        this.total_expenses_last_month = total_expenses_last_month;
    }

    get getUserId(): number {
        return this.user_id;
    }

    setUserId(user_id: number): void {
        this.user_id = user_id;
    }

    get getUsername(): string {
        return this.username;
    }

    setUsername(username: string): void {
        this.username = username;
    }

    get getTotalExpensesLastMonth(): number {
        return this.total_expenses_last_month;
    }

    setTotalExpensesLastMonth(total_expenses_last_month: number): void {
        this.total_expenses_last_month = total_expenses_last_month;
    }

}