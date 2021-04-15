import { request, response, Router } from "express";
import User from "../models/User";
import UserRepository from '../repositories/UserRepository';
import { getCustomRepository, getRepository } from "typeorm";
import CreateUserService from '../services/CreateUserService';

const userRouter = Router();

// criação de usuário via service devido às regras de negócio necessárias (ex. email único, cripto de senhas, etc)
userRouter.post('/', async (request, response) => { 
  try{
    const { name, password, email, course } = request.body;

    const createUser = new CreateUserService();

    const user = await createUser.execute({
      name,
      password,
      email,
      course,
    });

    // @ts-expect-error ~ ignorando o erro do ts.
    delete user.password;

    return response.status(201).json(user);
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
