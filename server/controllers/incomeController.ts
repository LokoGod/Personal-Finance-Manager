import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

const getAllRecordedIncome = async () => {
    return prisma.income.findMany()
}

const postIncome = async () => {
    
}

export { getAllRecordedIncome }