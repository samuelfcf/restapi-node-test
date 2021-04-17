import { NextFunction, Request, Response } from 'express';
import { decode, verify } from 'jsonwebtoken';
import authConfig from '../config/auth';

interface TokenPayload {
  iat: number;
  exp: number;
  sub: string;
}


export default function ensureAuthenticated(request:Request, response:Response, next:NextFunction): void {
  // validação do token JWT via verify do jsonwebtoken

  const authHeader = request.headers.authorization;

  if(!authHeader) {
    throw new Error("Token JWT não informado.");
  }

  // lembrar que authorization esta no formato 'Bearer asidnbaosdhio'
  const [, token] = authHeader.split(' '); // separando as duas palavras pelo espaço e pegando só a segunda palavra.

try {
  const decoded = verify(token, authConfig.jwt.secret);

  const { sub } = decoded as TokenPayload;

  request.user = {
    id: sub,
  }

  return next();
} catch (err) {
  throw new Error('token JWT inválido!');
}

}