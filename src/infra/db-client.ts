import { prisma } from "../config/prisma.js";
export const db = () => {
    return prisma;
}