import { Router } from "express";
import Class from "../models/Class";
import ClassRepository from "../repositories/ClassRepository";
import { getCustomRepository, getRepository } from "typeorm";

const classRouter = Router();

classRouter.post('/', async (request, response) => {
  try{
    const classRepo = getRepository(Class);
    const resp = await classRepo.save(request.body);
    return response.status(201).json(resp);
  } catch (err) {
    console.log('err.message :>>', err.message);
    return response.status(400).send();
  }
});

classRouter.get('/', async (request, response) => {
  const classRepo =  getRepository(Class);
  const resp = await classRepo.find();

  response.status(201).json(resp);

});

classRouter.get('/:name', async (request, response) => {
  const classRepo = getCustomRepository(ClassRepository);
  const resp = await classRepo.findByName(request.params.name);
  response.status(201).json(resp);
})

export default classRouter;