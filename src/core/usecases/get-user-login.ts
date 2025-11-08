import type { ICreateUser } from "../ports/in/create-user-port.js";
import type { User } from "../entities/user.js";
import type { ICreateUserRepository } from "../ports/out/create-user-repository.js";
import type { IGetUserLogin } from "../ports/in/get-user-login-port.js";
import type { IGetUserLoginRepository } from "../ports/out/get-user-login-repository.js";

export class GetUserLogin implements IGetUserLogin {
    constructor(private getUserLoginRepository: IGetUserLoginRepository){}
    async execute({ username, password }: { username: string, password: string }): Promise<User | string> {
        if (username === undefined || username === null)
            throw new Error("O campo username não deve ser vazio.");

        if (username.trim().length === 0)
            throw new Error("O campo username não deve ser vazio.");

        if (password === undefined || password === null)
            throw new Error("O campo password não deve ser vazio.");

        if (password.trim().length === 0)
            throw new Error("O campo password não deve ser vazio.");
        return await this.getUserLoginRepository.save({ username, password })
    }

}