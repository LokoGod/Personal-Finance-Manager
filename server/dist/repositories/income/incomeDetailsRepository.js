"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getAllRecordedIncomeDetails = async () => {
    return prisma.incomeDetails.findMany();
};
const postIncomeDetails = async (income_title, income_amount) => {
    return prisma.incomeDetails.create({ data: { income_title, income_amount } });
};
const incomeDetailsRepository = {
    getAllRecordedIncomeDetails,
    postIncomeDetails,
};
exports.default = incomeDetailsRepository;
