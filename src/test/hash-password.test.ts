import { describe, expect, it } from "vitest";
import { HashPassword } from "../core/usecases/hash-assword.js";
import { HashPasswordCrypto } from "../adapters/out/crypto/hash-password-crypto.js";

const sut = ({ password }: { password: string }) => {
    return new HashPassword(new HashPasswordCrypto()).execute({ password });
}
describe("Quando for obter um utilizador para logar", () => {

    it('Caso seja fornecido uma password inválido', () => {
        const promise = sut({ password:'' });
        expect(promise).rejects.toThrowError('Senha inválida.');
    })

    it('Caso for fornecido uma passord válida', async () => {
        const hash = await sut({ password:'VP' });
        expect(hash.length).toBeGreaterThan(0);
    })

})