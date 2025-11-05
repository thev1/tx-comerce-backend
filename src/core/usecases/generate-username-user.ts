import { User } from "../entities/user.js";
import type { IGenerateUsername } from "../ports/in/generate-username-port.js";
import type { IGenerateUsernameRepository } from "../ports/out/generate-username-repository.js";

export class GenerateUsername implements IGenerateUsername {
    constructor(private generateUsernameRepository: IGenerateUsernameRepository){}
    async execute({ name, lastname }: { name: string, lastname: string }): Promise<string> {
        const user = new User(name, lastname, name, name);
        user.validate();
        const username = await this.generateUsernameRepository.get({ username: `${name.toLowerCase()}.${lastname.toLowerCase()}`})
        if(username === null) return `${name.toLowerCase()}.${lastname.toLowerCase()}`;
        return 'Username já em uso por um outro utilizador'
    }

}