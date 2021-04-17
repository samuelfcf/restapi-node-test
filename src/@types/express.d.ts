// sobrescrever uma tipagem do express.  uso disso é feito no middleware de autenticação.
declare namespace Express {
  export interface Request {
    user: {
      id: string;
    }
  }
}