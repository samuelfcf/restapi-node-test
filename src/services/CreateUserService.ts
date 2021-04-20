import { getRepository } from "typeorm";
import User from "../models/User";
import { hash } from 'bcryptjs';

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

  const hashedPassoword = await hash(password, 8);

  const user = userRepository.create({
    name,
    password: hashedPassoword,
    email,
    course,
  });

  await userRepository.save(user);

  return user;
  
  }
}