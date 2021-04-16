import { getRepository } from "typeorm";
import User from "../models/User";
import { compare } from 'bcryptjs';

interface Request {
  email: string,
  password: string,
}

export default class AuthenticateUserService {
  public async execute({ email, password }:Request): Promise<{user: User}> {

    const usersRepository = getRepository(User);
    const user = await usersRepository.findOne({
      where: {
        email,
      }
    });

    if (!user) {
      throw new Error('Ops! Combinação email/senha está incorreta.')
    }

    const passwordMatched = await compare(password, user.password);

    if (!passwordMatched) {
      throw new Error('Ops! Combinação email/senha está incorreta.')
    }

    //Usuário autenticado!!

    return {
      user,
    };

  }
}