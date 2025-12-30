import { Category } from "./Category";
import { PaymentMethod } from "./PaymentMethod";

export class Expense {
    private id: number;
    private user_id: number;
    private category: Category;
    private amount: number;
    private date: Date;
    private comment: string;
    private paymentMethod: PaymentMethod;

    constructor(
        id: number,
        user_id: number,
        category: any,
        amount: number,
        date: Date,
        comment: string,
        paymentMethod: any
    ) {
        this.id = id;
        this.user_id = user_id;
        this.category = category;
        this.amount = amount;
        this.date = date;
        this.comment = comment;
        this.paymentMethod = paymentMethod;
    }

    get getId(): number {
        return this.id;
    }

    setId(id: number): void {
        this.id = id;
    }

    get getUserId(): number {
        return this.user_id;
    }

    setUserId(user_id: number): void {
        this.user_id = user_id;
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
