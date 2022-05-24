import express from "express";
import mongoose from "mongoose";
import blogRouter from "./routes/blog-routes";
import router from "./routes/user-routes";
import cors from "cors";
import dotenv from "dotenv";

const app = express();
app.use(cors());
dotenv.config();
app.use(express.json());
app.use("/api/user", router);
app.use("/api/blog", blogRouter);

mongoose
  .connect(process.env.MONGO_URL || 5000)
  .then(() => app.listen(5000))
  .then(() => console.log("Connected to database😊"))
  .catch((err) => console.log(err));
