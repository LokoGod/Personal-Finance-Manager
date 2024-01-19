import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import "dotenv/config";

// Import custom routes


// Instances
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// API routing
    // app.use("/api/v1/example", exampleRouter)

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
