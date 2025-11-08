import type { User } from "../../entities/user.js";

export interface IGetUserLoginRepository{
    save({username, password}: {username: string, password: string}):Promise<User | string>
}