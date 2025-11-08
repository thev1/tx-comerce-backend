import type { IHashPasswordCrypto } from "../../../core/ports/out/hash-password-crytpo.js";
import { CryptoByArgo2 } from "../../../infra/crypto-by-argon2.js";

export class HashPasswordCrypto implements IHashPasswordCrypto {
  constructor() { }
  async cifrar({ password }: { password: string; }): Promise<string> {
    try {
      return await new CryptoByArgo2().hashPassword({ password })
    } catch (error) {
      if(error instanceof Error)
        throw new Error(error.message);
      throw new Error("Erro na validação da password.");
    }
  }
}