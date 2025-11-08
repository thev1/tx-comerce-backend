import type { User } from "../../../core/entities/user.js";
import type { IGetUserLogin } from "../../../core/ports/in/get-user-login-port.js";

export class GetUserLoginController{
    constructor(private getUserLogin: IGetUserLogin){}
    async get({ username, password }: {username: string, password: string}): Promise<User | string >{
        return await this.getUserLogin.execute({ username, password })
    }
}