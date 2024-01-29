import express from "express";
const incomeRoutes = express.Router();

import {
  allRecordedIncome,
  createIncome,
  specificIncome,
} from "../../controllers/income/incomeController";

incomeRoutes.route("/").get(allRecordedIncome).post(createIncome)
incomeRoutes.route("/:id").get(specificIncome)

export { incomeRoutes }