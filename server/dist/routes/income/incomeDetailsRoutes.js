"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.incomeDetailsRoutes = void 0;
const express_1 = __importDefault(require("express"));
const incomeDetailsRoutes = express_1.default.Router();
exports.incomeDetailsRoutes = incomeDetailsRoutes;
const incomeDetailsController_1 = require("../../controllers/income/incomeDetailsController");
incomeDetailsRoutes.route("/").get(incomeDetailsController_1.allRecordedIncomeDetails).post(incomeDetailsController_1.createIncomeDetails);
