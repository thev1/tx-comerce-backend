export class User {

    private name: string;
    private lastname: string;
    private username: string;
    private password: string;

    constructor(name: string, lastname: string, username: string, password: string,) {
        this.name = name;
        this.lastname = lastname;
        this.username = username;
        this.password = password
    }

    public getName(): string {
        return this.name;
    }

    public setName(name: string) {
        this.name = name;
    }

    public getLastName(): string {
        return this.lastname;
    }

    public setLastName(lastname: string) {
        this.lastname = lastname;
    }

    public getUserName(): string {
        return this.username;
    }

    public setUserName(username: string) {
        this.username = username;
    }

    public getPassword(): string {
        return this.password;
    }

    public setPassword(password: string) {
        this.password = password;
    }
}