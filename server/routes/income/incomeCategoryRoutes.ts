import express from 'express'
const incomeCategoryRoutes = express.Router()

import { getAllIncomeCategories, createIncomeCategory } from '../../controllers/income/incomeCategoryController'

incomeCategoryRoutes.route("/").get(getAllIncomeCategories).post(createIncomeCategory)

export { incomeCategoryRoutes }