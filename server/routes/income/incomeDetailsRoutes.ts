import express from "express";
const incomeDetailsRoutes = express.Router();

import {
  allRecordedIncomeDetails,
  createIncomeDetails,
  specificIncomeDetails,
} from "../../controllers/income/incomeDetailsController";

incomeDetailsRoutes.route("/").get(allRecordedIncomeDetails).post(createIncomeDetails)
incomeDetailsRoutes.route("/:id").get(specificIncomeDetails)

export { incomeDetailsRoutes }