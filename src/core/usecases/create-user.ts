import type { ICreateUser } from "../contracts/create-user.js";
import type { User } from "../entities/user.js";

export class CreateUser implements ICreateUser{
    async execute({ user }: { user: User; }): Promise<string> {
        
        if(user.getName() === undefined || user.getName() === null)
            throw new Error("Nome informado invalido. 2");
        if(user.getName().trim.length === 0)
            throw new Error("Nome informado invalido.");
        

        return 'Utilizador criádo com sucesso.'
    }
    
}