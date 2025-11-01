import type { ICreateUser } from "../contracts/create-user.js";
import type { User } from "../entities/user.js";

export class CreateUser implements ICreateUser{
    async execute({ user }: { user: User; }): Promise<string> {
        if(user.getName() === undefined || user.getName() === null)
            throw new Error("O campo nome não ser vazio.");
        if(user.getName().trim().length === 0)
            throw new Error("O campo nome não ser vazio.");
        if(/\d/.test(user.getName()))
            throw new Error("O campo nome não pode conter números");
        if(/[^a-zA-Z0-9]/.test(user.getName()))
            throw new Error("O campo nome não pode conter caracteres especiais");
        

        return 'Utilizador criádo com sucesso.'
    }
    
}