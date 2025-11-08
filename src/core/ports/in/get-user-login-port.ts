import type { User } from "../../entities/user.js";

export interface IGetUserLogin{
    execute({username, password}: {username: string, password: string}): Promise<User | string>;
}