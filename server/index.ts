import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import "dotenv/config";

// Import custom routes
import { incomeDetailsRoutes } from "./routes/income/incomeDetailsRoutes";
import { incomeCategoryRoutes } from "./routes/income/incomeCategoryRoutes";

// Instances
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// API routing
app.use("/api/v1/incomeDetails", incomeDetailsRoutes);
app.use("/api/v1/incomeCategories", incomeCategoryRoutes)

const port = process.env.PORT || 9000;

// Spin-up server
const start = async () => {
  try {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
