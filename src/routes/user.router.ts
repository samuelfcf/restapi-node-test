import { request, response, Router } from "express";
import User from "../models/User";
import UserRepository from '../repositories/UserRepository';
import { getCustomRepository, getRepository } from "typeorm";

const userRouter = Router();

userRouter.post('/', async (request, response) => {
  try{
    const repo = getRepository(User);
    const resp = await repo.save(request.body);
    return response.status(201).json(resp);
  } catch (err) {
    console.log("err.messege: ", err.messege);
  }
});

userRouter.get('/', async (request, response) => {
  const repo = getRepository(User);
  const resp = await repo.find();
  return response.status(201).json(resp)
});

// uso do filtro criado em respositories
userRouter.get('/:course', async (request, response) => {
  const repo = getCustomRepository(UserRepository);
  const resp = await repo.findByCourse(request.params.course);
  return response.json(resp);
});

export default userRouter;
