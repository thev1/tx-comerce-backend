import { describe, expect, it } from "vitest";
import { GetUserLoginController } from "../adapters/in/controllers/get-user-login-controller.js";
import { GetUserLoginRepository } from "../adapters/out/respositories/get-user-login-repository.js";
import { GetUserLogin } from "../core/usecases/get-user-login.js";

const sut = ({ username, password }: { username: string, password: string }) => {
    return new GetUserLoginController(new GetUserLogin(new GetUserLoginRepository())).get({ username, password });
}
describe("Quando for obter um utilizador para logar", () => {

    it('Caso seja fornecido um username inválido', () => {
        const promise = sut({ username: '', password: '' });
        expect(promise).rejects.toThrowError('O campo username não deve ser vazio.');
    })

    it('Caso seja fornecido uma password inválido', () => {
        const promise = sut({ username: 'vipedro', password:'' });
        expect(promise).rejects.toThrowError('O campo password não deve ser vazio.');
    })

    it('Caso username epassword forem válidado mas as credenciais forem erradas', async () => {
        const promise = sut({ username: 'vipedro', password:'teste' });
        expect(promise).rejects.toThrowError('Credenciais inválidas.');
    })

    it('Caso for fornecido credencias válidas', async () => {
        const user = await sut({ username: 'vp', password:'VP' });
        expect(user !== null).toBe(true);
    })

})