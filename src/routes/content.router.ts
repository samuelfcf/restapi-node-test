import { response, Router } from "express";
import Content from "src/models/Content";
import { getRepository } from "typeorm";

const contentRouter = Router();

contentRouter.post('/', async (request, response) => {
  try{
    const contentRepo = getRepository(Content);
    const resp = await contentRepo.save(request.body);
    return response.status(201).json(resp);
  } catch (err) {
    console.log('err.message :>>', err.message)
    return response.status(400).send();
  }
});

contentRouter.get('/', async (request, response) => {
  const contentRepo = getRepository(Content);
  const resp = await contentRepo.find();

  response.json(resp);
});

export default contentRouter;