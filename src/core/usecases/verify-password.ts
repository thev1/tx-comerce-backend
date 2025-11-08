import type { IVerifyPassword } from "../ports/in/verify-password-port.js";
import type { IVerifyPasswordCrypto } from "../ports/out/verify-password-crytpo.js";

export class VerifyPassword implements IVerifyPassword {
    constructor(private verifyPasswordCrypto: IVerifyPasswordCrypto) { }
    async execute({ password, hash }: { password: string, hash: string }): Promise<boolean> {
        if (password === undefined || password === null)
            throw new Error("Credênciais inválidas.");
        if (password.trim().length === 0)
            throw new Error("Credenciais inválidas.");
        
        return await this.verifyPasswordCrypto.verify({ password, hash })
    }


}