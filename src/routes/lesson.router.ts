import { response, Router } from "express";
import Lesson from "../models/Lesson";
import { getRepository } from "typeorm";

const lessonRouter = Router();

lessonRouter.post('/', async (request, response) => {
  try{
    const lessonRepo = getRepository(Lesson);
    const resp = await lessonRepo.save(request.body);
    return response.status(201).json(resp);
  } catch (err) {
    console.log('err.message :>>', err.message)
    return response.status(400).send();
  }
});

lessonRouter.get('/', async (request, response) => {
  const lessonRepo = getRepository(Lesson);
  const resp = await lessonRepo.find();

  response.status(201).json(resp);
});

export default lessonRouter;