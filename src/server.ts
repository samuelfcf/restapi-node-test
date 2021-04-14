import dotenv from "dotenv";
import express, {json} from "express";
import "./database";
import router from "./routes/index";
import "reflect-metadata";

const app = express();

app.use(json());
app.use(router);

dotenv.config();

app.listen(4000, () => {
  console.clear();
  console.log("Server on Port 🚪", 4000);
  console.log('process.env.DATABASE_URL: ', process.env.DATABASE_URL);
});