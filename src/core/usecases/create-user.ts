import type { ICreateUser } from "../ports/in/create-user-port.ts";
import type { User } from "../entities/user.ts";
import type { ICreateUserRepository } from "../ports/out/create-user-repository.js";

export class CreateUser implements ICreateUser {
    constructor(private createUserRepository: ICreateUserRepository){}
    async execute({ user }: { user: User; }): Promise<string> {
        user.validate();
        user.setName(user.getName().toLocaleLowerCase());
        user.setLastName(user.getLastName().toLocaleLowerCase())
        user.setUserName(user.getUserName().toLocaleLowerCase());
        await this.createUserRepository.save({e: user})
        return 'Utilizador criádo com sucesso.'
    }

}