import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getAllRecordedIncomeDetails = async () => {
  return prisma.incomeDetails.findMany();
};

const postIncomeDetails = async (income_title: string, income_amount: number) => {
  return prisma.incomeDetails.create({ data: {income_title, income_amount} });
};

const incomeDetailsRepository = {
  getAllRecordedIncomeDetails,
  postIncomeDetails,
};
export default incomeDetailsRepository;
