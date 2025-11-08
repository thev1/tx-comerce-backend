import type { IVerifyPasswordCrypto } from "../../../core/ports/out/verify-password-crytpo.js";
import { CryptoByArgo2 } from "../../../infra/crypto-by-argon2.js";

export class VerifyPasswordCrypto implements IVerifyPasswordCrypto {
  constructor() { }
  async verify({ password, hash }: { password: string, hash: string }): Promise<boolean> {
    try {
      return await new CryptoByArgo2().verifyPassword({ password, hash })
    } catch (error) {
      if(error instanceof Error)
        throw new Error(error.message);
      throw new Error("Erro na validação da password.");
    }
    
  }
}