import express from "express";
const incomeDetailsRoutes = express.Router();

import {
  allRecordedIncomeDetails,
  createIncomeDetails,
} from "../../controllers/income/incomeDetailsController";

incomeDetailsRoutes.route("/").get(allRecordedIncomeDetails).post(createIncomeDetails)

export { incomeDetailsRoutes }