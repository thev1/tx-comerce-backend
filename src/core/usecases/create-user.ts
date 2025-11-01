import type { ICreateUser } from "../contracts/create-user.js";
import type { User } from "../entities/user.js";

export class CreateUser implements ICreateUser {
    async execute({ user }: { user: User; }): Promise<string> {
        if (user.getName() === undefined || user.getName() === null)
            throw new Error("O campo nome não ser vazio.");

        if (user.getName().trim().length === 0)
            throw new Error("O campo nome não ser vazio.");

        if (/\d/.test(user.getName()))
            throw new Error("O campo nome não pode conter números");
        
        if (/[^a-zA-Z0-9]/.test(user.getName()))
            throw new Error("O campo nome não pode conter caracteres especiais");

        if (user.getLastName() === undefined || user.getLastName() === null)
            throw new Error("O campo sobre nome não ser vazio.");

        if (user.getLastName().trim().length === 0)
            throw new Error("O campo sobre nome não ser vazio.");

        if (/\d/.test(user.getLastName()))
            throw new Error("O campo sobre nome não pode conter números");
        
        if (/[^a-zA-Z0-9]/.test(user.getLastName()))
            throw new Error("O campo sobre nome não pode conter caracteres especiais");

        if (user.getUserName() === undefined || user.getUserName() === null)
            throw new Error("O campo username não ser vazio.");

        if (user.getUserName().trim().length === 0)
            throw new Error("O campo username não ser vazio.");

        if (user.getPassword() === undefined || user.getPassword() === null)
            throw new Error("O campo password não ser vazio.");

        if (user.getPassword().trim().length === 0)
            throw new Error("O campo password não ser vazio.");
        
        return 'Utilizador criádo com sucesso.'
    }

}