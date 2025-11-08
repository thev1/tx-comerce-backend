import type { IHashPassword } from "../ports/in/hash-password-port.js";
import type { IHashPasswordCrypto } from "../ports/out/hash-password-crytpo.js";

export class HashPassword implements IHashPassword {
    constructor(private HashPasswordCrypto: IHashPasswordCrypto){}
    async execute({ password }: { password: string }): Promise<string> {
        if (password === undefined || password === null)
            throw new Error("O campo password não deve ser vazio.");
        if (password.trim().length === 0)
            throw new Error("O campo password não deve ser vazio.");
        return await this.HashPasswordCrypto.cifrar({ password})
    }

}