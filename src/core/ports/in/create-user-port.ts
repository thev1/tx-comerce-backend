import type { User } from "../../entities/user.js";

export interface ICreateUser{
    execute({user}: {user: User}): Promise<string>;
}