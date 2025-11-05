import type { User } from "../../core/entities/user.js";
import { prisma, prismaError } from "../../config/prisma.js";
import type { IGenerateUsernameRepository } from "../../core/ports/out/generate-username-repository.js";

export class GenerateUsernameRepository implements IGenerateUsernameRepository {
  constructor() { }
  async get({ username }: { username: string }): Promise<string> {
    let data: any;
    try {
        data = await prisma.user.findUnique({
        where: { username },   // ou where: { username: 'exemplo' }
        select: {
          username: true,
        },
      });
    } catch (error) {
      prismaError(error);
    }
    return data;
  }

}