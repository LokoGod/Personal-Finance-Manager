"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllRecordedIncome = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getAllRecordedIncome = async () => {
    return prisma.income.findMany();
};
exports.getAllRecordedIncome = getAllRecordedIncome;
const createIncome = async () => {
};
