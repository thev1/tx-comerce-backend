import { prisma, prismaError } from "../../../config/prisma.js";
import type { User } from "../../../core/entities/user.js";
import type { IGetUserLoginRepository } from "../../../core/ports/out/get-user-login-repository.js";


export class GetUserLoginRepository implements IGetUserLoginRepository {
  constructor() { }
  async save({ username, password }: { username: string, password: string }): Promise<User | string> {
    let user: any;
    try {
      user = await prisma.user.findUnique({
        where: { username, password }
      });
      if (user === null)
        throw new Error("Credenciais inválidas.");
    } catch (error) {
      prismaError(error);
    }
    return user;
  }

}