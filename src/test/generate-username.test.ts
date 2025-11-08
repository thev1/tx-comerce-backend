import { describe, expect, it } from "vitest";
import { GenerateUsernameController } from "../adapters/in/controllers/generate-username-controller.js";
import { GenerateUsername } from "../core/usecases/generate-username-user.js";
import { GenerateUsernameRepository } from "../adapters/out/respositories/generate-username-repository.js";

const sut = ({ name, lastname }: { name: string, lastname: string }) => {
    return new GenerateUsernameController(new GenerateUsername(new GenerateUsernameRepository())).criar({ name, lastname });
}
describe("Quando for criar um utilizador", () => {

    it('Caso seja fornecido um nome inválido', () => {
        const promise = sut({ name: '', lastname: '' });
        expect(promise).rejects.toThrowError('O campo nome não deve ser vazio.');
    })

    it('Caso seja fornecido um nome com números', () => {
        const promise = sut({  name: 'vp88', lastname: '' });
        expect(promise).rejects.toThrowError('O campo nome não pode conter números');
    })

    it('Caso seja fornecido um nome com caracteres especiais', () => {
        const promise = sut({  name: 'vp@', lastname: '' });
        expect(promise).rejects.toThrowError('O campo nome não pode conter caracteres especiais');
    })

    it('Caso seja fornecido um lastnome inválido', () => {
        const promise = sut({  name: 'vp', lastname: '' });
        expect(promise).rejects.toThrowError('O campo sobre nome não ser vazio.');
    })

    it('Caso seja fornecido um lastname com números', () => {
        const promise = sut({  name: 'vp', lastname: 'vp88' });
        expect(promise).rejects.toThrowError('O campo sobre nome não pode conter números');
    })

    it('Caso seja fornecido um nome com caracteres especiais', () => {
        const promise = sut({  name: 'vp', lastname: 'vp@' });
        expect(promise).rejects.toThrowError('O campo sobre nome não pode conter caracteres especiais');
    })

    it('Caso seja fornecido um name e lastname válido', async () => {
        const username = await sut({  name: 'vp', lastname: 'vp' });
        expect(username).toEqual(expect.any(String));
    })
})