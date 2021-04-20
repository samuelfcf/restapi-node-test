// ROTAS DO INDEX
import  { Router } from "express";
import userRouter from "./user.router";
import sessionsRouter from "./session.router";

const router = Router();

router.get('/', (request, response) => {
    return response.json({
        messege: "Funcionando!!"
    })
});

router.use('/users', userRouter);
router.use('/sessions', sessionsRouter);

export default router;