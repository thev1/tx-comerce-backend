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

    public validate(){
        if (this.getName() === undefined || this.getName() === null)
            throw new Error("O campo nome não deve ser vazio.");

        if (this.getName().trim().length === 0)
            throw new Error("O campo nome não deve ser vazio.");

        if (/\d/.test(this.getName()))
            throw new Error("O campo nome não pode conter números");
        
        if (/[^a-zA-Z0-9]/.test(this.getName()))
            throw new Error("O campo nome não pode conter caracteres especiais");

        if (this.getLastName() === undefined || this.getLastName() === null)
            throw new Error("O campo sobre nome não ser vazio.");

        if (this.getLastName().trim().length === 0)
            throw new Error("O campo sobre nome não ser vazio.");

        if (/\d/.test(this.getLastName()))
            throw new Error("O campo sobre nome não pode conter números");
        
        if (/[^a-zA-Z0-9]/.test(this.getLastName()))
            throw new Error("O campo sobre nome não pode conter caracteres especiais");

        if (this.getUserName() === undefined || this.getUserName() === null)
            throw new Error("O campo username não deve ser vazio.");

        if (this.getUserName().trim().length === 0)
            throw new Error("O campo username não deve ser vazio.");

        if (this.getPassword() === undefined || this.getPassword() === null)
            throw new Error("O campo password não deve ser vazio.");

        if (this.getPassword().trim().length === 0)
            throw new Error("O campo password não deve ser vazio.");
    }
}