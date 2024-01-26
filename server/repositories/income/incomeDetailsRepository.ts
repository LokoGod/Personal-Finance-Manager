import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getAllRecordedIncomeDetails = async () => {
  return prisma.incomeDetails.findMany();
};

const postIncomeDetails = async (
  income_title: string,
  income_amount: number
) => {
  return prisma.incomeDetails.create({ data: { income_title, income_amount } });
};

const getSpecificIncomeDetails = async (id: number) => {
  return prisma.incomeDetails.findUniqueOrThrow({ where: { id: Number(id) } });
};

const incomeDetailsRepository = {
  getAllRecordedIncomeDetails,
  postIncomeDetails,
  getSpecificIncomeDetails,
};
export default incomeDetailsRepository;
