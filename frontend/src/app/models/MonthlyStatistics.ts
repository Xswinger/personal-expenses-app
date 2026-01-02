export class MonthlyStatictics {
    private month: string;
    private total_amount: number;

    constructor(month: string, total_amount: number) {
        this.month = month;
        this.total_amount = total_amount;
    }

    get getMonth(): string {
        return this.month;
    }

    setMonth(month: string): void {
        this.month = month;
    }

    get getTotalAmount(): number {
        return this.total_amount;
    }

    setTotalAmount(total_amount: number): void {
        this.total_amount = total_amount;
    }
    
}