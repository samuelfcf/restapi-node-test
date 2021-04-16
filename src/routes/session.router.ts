import { request, response, Router } from "express";
import AuthenticateUserService from "../services/AuthenticateUserService";

const sessionsRouter = Router();


sessionsRouter.post('/', async (request, response) => { 
  try{
    
    const { email, password } = request.body;
    const authenticateUser = new AuthenticateUserService();

    const { user } = await authenticateUser.execute({
      email,
      password,
    });

    // @ts-expect-error ~ ignorando o erro do ts
    delete user.password;

    return response.json({ user });

  } catch (err) {
    return response.status(400).json({error: err.messege});
  };
});

export default sessionsRouter;
