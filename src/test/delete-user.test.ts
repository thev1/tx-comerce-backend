import { describe, expect, it } from "vitest";
import { DeleteUserController } from "../adapters/in/controllers/delete-user-controller.js";
import { DeleteUser } from "../core/usecases/delete-user.js";
import { DeleteUserRepository } from "../adapters/out/respositories/delete-user-repository.js";

const sut = ({ username }: { username: string }) => {
    return new DeleteUserController(new DeleteUser(new DeleteUserRepository())).delete({ username });
}
describe("Quando for deletar um utilizador", () => {

    it('Caso seja fornecido um nome inválido', () => {
        const promise = sut({ username: '' });
        expect(promise).rejects.toThrowError('O username não deve ser vazio.');
    })

    it('Caso todos os campos do user estejam válido', async () => {
        const promise = sut({ username: 'VP2' });
        expect(promise).rejects.toThrowError('O registo solicitado não existe.');
    })

    it('Caso todos os campos do user estejam válido', async () => {
        const message = await sut({ username: 'vp' });
        expect(message).toBe('Utilizador deletado com sucesso.');
    })
});