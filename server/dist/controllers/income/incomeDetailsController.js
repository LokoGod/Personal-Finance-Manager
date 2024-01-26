"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createIncomeDetails = exports.allRecordedIncomeDetails = void 0;
const incomeDetailsRepository_1 = __importDefault(require("../../repositories/income/incomeDetailsRepository"));
const allRecordedIncomeDetails = async (req, res) => {
    try {
        const incomeDetails = await incomeDetailsRepository_1.default.getAllRecordedIncomeDetails();
        res.status(200).json({ incomeDetails });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error " });
    }
};
exports.allRecordedIncomeDetails = allRecordedIncomeDetails;
const createIncomeDetails = async (req, res) => {
    try {
        const { income_title, income_amount } = req.body;
        const incomeDetails = await incomeDetailsRepository_1.default.postIncomeDetails(income_title, income_amount);
        res.status(201).json({ incomeDetails });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};
exports.createIncomeDetails = createIncomeDetails;
