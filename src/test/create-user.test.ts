import { describe, it, expect } from "vitest";
import { CriarUtilizadorContrioller } from "../adapters/in/index.js";
import { User } from "../core/entities/user.js";
import { CreateUser } from "../core/usecases/create-user.js";

describe("Quando for criar um utilizador", () =>{

    const user = new User('', '', '', '');
     it('Caso seja fornecido um nome inválido', () =>{
        const promise = new CriarUtilizadorContrioller(new CreateUser()).criar({user});
         expect(promise).rejects.toThrowError('Nome informado invalido.');
    })
})