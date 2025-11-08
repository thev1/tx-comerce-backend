import { prisma, prismaError } from "../../../config/prisma.js";
import type { IDeleteUserRepository } from "../../../core/ports/out/delete-user-repository.js";

export class DeleteUserRepository implements IDeleteUserRepository {
    async delete({ username }: { username: string; }): Promise<string> {
        try {
            const user = await prisma.user.delete({
                where: { username },
            });
        } catch (error) {
            prismaError(error);
        }

        return "Utilizador deletado com sucesso.";
    }
}