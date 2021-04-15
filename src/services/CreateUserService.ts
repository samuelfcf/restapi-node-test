import { getRepository } from "typeorm"
import User from "../models/User"

interface Request {
  name: string;
  password: string;
  email: string;
  course: string;
}

export default class CreateUserService {
  public async execute({ name, password, email, course }:Request): Promise<User> {
    const userRepository = getRepository(User);

    const checkUserExists = await userRepository.findOne({
      where: {
        email,
      },
    });
  
  if (checkUserExists) {
    throw new Error('Ops! Email ja utilizado.');
  }

  const user = userRepository.create({
    name,
    password,
    email,
    course,
  });

  await userRepository.save(user);

  return user;
  
  }
}