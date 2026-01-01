import { Category } from "../Category";
import { PaymentMethod } from "../PaymentMethod";

export class ExpenseCreate {
    private category: Category;
    private amount: number;
    private date: Date;
    private comment: string;
    private paymentMethod: PaymentMethod;

    constructor(
        category: any,
        amount: number,
        date: Date,
        comment: string,
        paymentMethod: any
    ) {
        this.category = category;
        this.amount = amount;
        this.date = date;
        this.comment = comment;
        this.paymentMethod = paymentMethod;
    }

    get getCategory(): Category {
        return this.category;
    }

    setCategory(category: Category): void {
        this.category = category;
    }

    get getAmount(): number {
        return this.amount;
    }

    setAmount(amount: number): void {
        if (amount < 0) {
            throw new Error('Amount must be non-negative');
        }
        this.amount = amount;
    }

    get getDate(): Date {
        return this.date;
    }

    setDate(date: Date): void {
        this.date = date;
    }

    get getComment(): string {
        return this.comment;
    }

    setComment(comment: string): void {
        this.comment = comment;
    }

    get getPaymentMethod(): PaymentMethod {
        return this.paymentMethod;
    }

    setPaymentMethod(paymentMethod: PaymentMethod): void {
        this.paymentMethod = paymentMethod;
    }
}
