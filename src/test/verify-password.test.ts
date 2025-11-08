import { describe, expect, it } from "vitest";
import { VerifyPassword } from "../core/usecases/verify-password.js";
import { VerifyPasswordCrypto } from "../adapters/out/crypto/verify-password-crypto.js";

const sut = ({ password, hash }: { password: string, hash: string }) => {
    return new VerifyPassword(new VerifyPasswordCrypto()).execute({ password, hash });
}
describe("Quando for obter um utilizador para logar", () => {

    it('Caso seja fornecido uma password inválido', () => {
        const promise = sut({ password:'', hash: '' });
        expect(promise).rejects.toThrowError('Credenciais inválidas.');
    })

    it('Caso seja fornecido uma password inválido', () => {
        const promise = sut({ password:'victorino123', hash: '' });
        expect(promise).rejects.toThrowError('Erro na validação das credênciais.');
    })

    it('Caso for fornecido uma passord inválida', async () => {
        const isValid = await sut({ password:'VP', hash: '$argon2yweitootuiopr' });
        expect(isValid).toBe(false);
    })

    it('Caso for fornecido uma passord válida', async () => {
        const isValid = await sut({ password:'VP', hash: '$argon2' });
        expect(isValid).toBe(true);
    })

})