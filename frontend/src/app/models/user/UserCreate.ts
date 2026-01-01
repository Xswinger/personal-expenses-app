export class UserCreate {
    private username: string;
    private email: string;
    private password: string;

    constructor(username: string, email: string, password: string) {
        this.username = username;
        this.email = email;
        this.password = password;
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

    get getPassword(): string {
        return this.password;
    }

    setPassword(password: string): void {
        this.password = password;
    }

}