import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

const getAllRecordedIncome = async () => {
    return prisma.income.findMany()
}

const createIncome = async () => {
    
}

export { getAllRecordedIncome }