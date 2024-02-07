import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getAllRecordedIncome = async () => {
  return prisma.income.findMany();
};

const postIncome = async (
  income_title: string,
  income_amount: number,
  income_category: string,
  recurring: boolean,
  received_date: Date,
  receving_date: Date
) => {
  return prisma.income.create({
    data: {
      income_title,
      income_amount,
      income_category,
      recurring,
      received_date,
      receving_date,
    },
  });
};

const getSpecificIncome = async (id: number) => {
  return prisma.income.findUniqueOrThrow({
    where: { id: Number(id) },
  });
};

const incomeRepository = {
  getAllRecordedIncome,
  postIncome,
  getSpecificIncome,
};
export default incomeRepository;
