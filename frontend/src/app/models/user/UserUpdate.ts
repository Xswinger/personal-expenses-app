export class UserUpdate {
    private username: string;
    private email: string;

    constructor(username: string, email: string) {
        this.username = username;
        this.email = email;
    }

    get getUsername(): string {
        return this.username;
    }

    setUsername(username: string): void {
        this.username = username;
    }

    get getEmail(): string {
        return this.email;
    }

    setEmail(email: string): void {
        this.email = email;
    }

}