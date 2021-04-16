// ROTAS DO INDEX
import  { Router } from "express";
import userRouter from "./user.router";
import sessionsRouter from "./session.router";

const router = Router();

router.use('/user', userRouter);
router.use('/sessions', sessionsRouter);

export default router;