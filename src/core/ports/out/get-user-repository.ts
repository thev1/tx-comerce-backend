import type { User } from "../../entities/user.js";

export interface IGetUserRepository{
    find({ e }:{ e: User }):User;
}