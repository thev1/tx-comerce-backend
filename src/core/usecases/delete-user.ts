import type { IDeleteUser } from "../ports/in/delete-user-port.js";
import type { IDeleteUserRepository } from "../ports/out/delete-user-repository.js";

export class DeleteUser implements IDeleteUser{
    constructor(private deleteUserRepository: IDeleteUserRepository){}
    async execute({ username }: { username: string; }): Promise<string> {
        if (username === undefined || username === null)
            throw new Error("O username não deve ser vazio.");
        if (username.trim().length === 0)
            throw new Error("O username não deve ser vazio.");
        return this.deleteUserRepository.delete({ username })
    }
}