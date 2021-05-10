import dotenv from "dotenv";

import express, { json, Request, Response, NextFunction } from "express";
import 'express-async-errors';
import "reflect-metadata";

import "./database";

import routes from "./routes/index";
import AppError from "./errors/AppError";

const app = express();

app.use(json());
app.use(routes);

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
  if (err instanceof AppError) { // se é um erro conhecido, 
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message
    })
  }

  console.error(err);

  return response.status(500).json({
    status: 'error',
    message: 'Internal server error'
  })
});

dotenv.config();

app.listen(process.env.PORT || 4000, () => {
  console.clear();
  console.log("Server on Port 🚪", 4000);
  console.log('process.env.DATABASE_URL: ', process.env.DATABASE_URL);
});