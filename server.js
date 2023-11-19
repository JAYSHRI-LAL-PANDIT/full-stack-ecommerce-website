import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import morgan from "morgan";
import authRoutes from "./routers/authRoute.js";
import categoryRoutes from "./routers/categoryRoutes.js";
import productRoutes from "./routers/productRoutes.js";

import cors from "cors";
//configure dotenv
dotenv.config();

//database calling
connectDB();
// Rest Object
const app = express();

//middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// routing
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);

// Rest Api
app.get("/", (req, res) => {
  res.send({
    message: "Welcom to ecommerce website",
  });
});

// port
const PORT = process.env.PORT || 8080;

//server listing
app.listen(PORT, () => {
  console.log(
    `Server is running in ${process.env.DEV_MODE} mode on ${PORT} port`.bgWhite
      .black
  );
});
