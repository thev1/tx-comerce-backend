import { PrismaClient, Prisma } from '../generated/prisma/client.js';
import { config } from "dotenv";

config();
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: ['query', 'error', 'warn'],
  });

  export function prismaError(error: any){

    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      // Erros conhecidos (ex: violação de unique, FK, etc.)
      if (error.code === 'P2002') {
        console.error(`O campo ${error.meta?.target} já existe.`);
        throw new Error('Erro: Campo único duplicado.');
      }

      if (error.code === 'P2025') {
        console.error('Erro: Registo não encontrado.');
        throw new Error('O registo solicitado não existe.');
      }
    } else if (error instanceof Prisma.PrismaClientValidationError) {
      // Erros de validação (dados inválidos)
      console.error('Erro de validação Prisma:', error.message);
      throw new Error('Dados inválidos fornecidos.');
    } else {
      // Outros erros genéricos
      console.error('Erro desconhecido:', error);
      throw new Error(error);
    }
  } 

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
