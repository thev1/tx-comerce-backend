import type { User } from "../../core/entities/user.js";
import type { ICreateUserRepository } from "../../core/ports/out/create-user-repository.js";
import { prisma, prismaError } from "../../config/prisma.js";

export class CreateUserRepository implements ICreateUserRepository {
  constructor() { }
  async save({ e }: { e: User; }): Promise<User> {
    try {
      const dbuser = await prisma.user.create({
        data: {
          name: e.getName(),
          lastname: e.getLastName(),
          username: e.getUserName(),
          password: e.getPassword(),
        },
      });
    } catch (error) {
      prismaError(error);
    }

    return e;
  }

}