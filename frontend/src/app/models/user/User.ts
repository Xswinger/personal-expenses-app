export class User {
    private id: number;
    private username: string;
    private email: string;

    constructor(id: number, username: string, email: string) {
        this.id = id;
        this.username = username;
        this.email = email;
    }

    get getId(): number {
        return this.id;
    }

    setId(id: number): void {
        this.id = id;
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