import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getAllRecordedIncome = async () => {
  return prisma.income.findMany();
};

const postIncome = async (
  income_title: string,
  income_amount: number,
  received_date: Date,
  categoryId: number
) => {
  return prisma.income.create({ data: { income_title, income_amount, received_date, categoryId } });
};

const getSpecificIncome = async (id: number) => {
  return prisma.income.findUniqueOrThrow({ where: { id: Number(id) } });
};

const incomeRepository = {
  getAllRecordedIncome,
  postIncome,
  getSpecificIncome,
};
export default incomeRepository;
