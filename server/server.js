import 'dotenv/config.js'
import express from "express";
import dbConnect from "./config/connect.js";
import cors from "cors"
const app = express();
import userRouter from './routes/userRouter.js'


app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);

dbConnect();
app.use(express.json())
app.use("/",userRouter);
app.listen(7000, () => {
  console.log("server is connected.......");
});
