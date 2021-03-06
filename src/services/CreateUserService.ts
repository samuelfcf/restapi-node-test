import { getRepository } from "typeorm";
import User, { Gender } from "../models/User";
import { hash } from 'bcryptjs';
import AppError from "../errors/AppError";


interface Request {
  name: string;
  password: string;
  email: string;
  course: string;
  gender: Gender
}

export default class CreateUserService {
  public async execute({ name, password, email, course, gender}:Request): Promise<User> {
  
  const userRepository = getRepository(User);

  const checkUserExists = await userRepository.findOne({
      where: {
        email,
      },
  });
  
  if (checkUserExists) {
    throw new AppError('Ops! Email ja utilizado.');
  }

  const hashedPassoword = await hash(password, 8);

  const user = userRepository.create({
    name,
    password: hashedPassoword,
    email,
    course,
    gender
  });

  await userRepository.save(user);

  return user;
  
  }
}