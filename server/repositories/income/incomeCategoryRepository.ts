import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const getAllIncomeCategories = async () => {
  return prisma.incomeCategory.findMany();
};

const createIncomeCategory = async (income_cat: string) => {
  return prisma.incomeCategory.create({ data: { income_cat } });
};

const incomeCategoryRepository = { getAllIncomeCategories, createIncomeCategory };
export default incomeCategoryRepository;
