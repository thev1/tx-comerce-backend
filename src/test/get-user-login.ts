import { describe, expect, it } from "vitest";

const sut = ({ user }: { user: User }) => {
    return new GetUserLoginController(new GetUserLogin(new GetUserLoginRepository())).criar({ user });
}
describe("Quando for criar um utilizador", () => {

    const user = new User('', '', '', '');

    it('Caso seja fornecido um nome inválido', () => {
        const promise = sut({ user });
        expect(promise).rejects.toThrowError('O campo nome não deve ser vazio.');
    })

    it('Caso seja fornecido um nome com números', () => {
        user.setName('VP5')
        const promise = sut({ user });
        expect(promise).rejects.toThrowError('O campo nome não pode conter números');
    })

    it('Caso seja fornecido um nome com caracteres especiais', () => {
        user.setName('VP@')
        const promise = sut({ user });
        expect(promise).rejects.toThrowError('O campo nome não pode conter caracteres especiais');
    })

    it('Caso seja fornecido um lastnome inválido', () => {
        user.setName("VP")
        const promise = sut({ user });
        expect(promise).rejects.toThrowError('O campo sobre nome não ser vazio.');
    })

    it('Caso seja fornecido um nome com números', () => {
        user.setLastName('VP5')
        const promise = sut({ user });
        expect(promise).rejects.toThrowError('O campo sobre nome não pode conter números');
    })

    it('Caso seja fornecido um nome com caracteres especiais', () => {
        user.setLastName('VP@')
        const promise = sut({ user });
        expect(promise).rejects.toThrowError('O campo sobre nome não pode conter caracteres especiais');
    })

    it('Caso seja fornecido um username inválido', () => {
        user.setLastName('VP')
        const promise = sut({ user });
        expect(promise).rejects.toThrowError('O campo username não deve ser vazio.');
    })

    it('Caso seja fornecido uma password inválido', () => {
        user.setUserName('VP')
        const promise = sut({ user });
        expect(promise).rejects.toThrowError('O campo password não deve ser vazio.');
    })

    it('Caso todos os campos do user estejam válido', async () => {
        user.setPassword('VP')
        const message = await sut({ user });
        expect(message).toBeOneOf(['Utilizador criádo com sucesso.',]);
    })

    it('Caso o utilizador já seja criádo', async () => {
        user.setPassword('VP')
        const promise = sut({ user });
        expect(promise).rejects.toThrowError('Erro: Campo único duplicado.');
    })

})