import type { User } from "../../entities/user.js";

export interface IGenerateUsername{
    execute({ name, lastname }: { name: string, lastname: string }): Promise<string>;
}