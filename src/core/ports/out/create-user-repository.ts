import type { User } from "../../entities/user.js";

export interface ICreateUserRepository{
    save({ e }:{ e: User }):Promise<User>
}