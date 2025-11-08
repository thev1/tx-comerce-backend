import argon2 from 'argon2';

export class CryptoByArgo2 {
    async hashPassword({ password }: { password: string }): Promise<string> {
        let hash = '';
        try {
            hash = await argon2.hash(password, {
                type: argon2.argon2id,
                memoryCost: 2 ** 16,  // 64 MB
                timeCost: 3,          // 3 iterações
                parallelism: 2,       // 2 thread
            });
        } catch (err) {
            this.errorValiadete(err);
        }
        return hash;
    }

    async verifyPassword({ password, hash }: { password: string, hash: string }): Promise<boolean> {
        if (!hash || typeof hash !== "string" || !hash.startsWith("$argon2")) {
            throw new Error("Erro na validação das credênciais.");
        }

        let validate = false;
         try {
            validate = await argon2.verify(hash, password);
        } catch (err) {
            this.errorValiadete(err);
        }
        return validate;
    }

    errorValiadete(err: any) {
        console.error("⚠️ Erro Argon2 detectado:");
        console.error(err.message);

        if (err.message.includes("memory cost")) {
            throw new Error("Erro na validação das credênciais.");
        } else if (err.message.includes("invalid salt")) {
            throw new Error("Erro na validação das credênciais.");
        } else if (err.message.includes("out of memory")) {
            throw new Error("Erro na validação das credênciais.");
        } else if (err.message.includes("time cost")) {
            throw new Error("Erro na validação das credênciais.");
        } else if (err.message.includes("pchstr must contain a $")) {
            throw new Error("Erro na validação das credênciais.");
        } else if (err.message.includes("verify mismatch")) {
            throw new Error("Erro na validação das credênciais.");
        } else if (err.message.includes("invalid hash")) {
            throw new Error("Erro na validação das credênciais.");
        } else if (err.message.includes("memory cost")) {
            throw new Error("Erro na validação das credênciais.");
        } else if (err.message.includes("out of memory")) {
            throw new Error("Erro na validação das credênciais.");
        } else {
            throw new Error("Erro na validação das credênciais.");
        }
    }
}