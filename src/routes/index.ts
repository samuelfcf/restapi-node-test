// ROTAS DO INDEX
import  { Router } from "express";
import userRouter from "./user.router";
import sessionsRouter from "./session.router";
import classRouter from "./class.router";
import contentRouter from "./content.router";
import lessonRouter from "./lesson.router";

const routes = Router();

routes.get('/', (request, response) => {
    return response.json({
        messege: "Funcionando!!"
    })
});

routes.use('/users', userRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/class', classRouter);
routes.use('/content', contentRouter);
routes.use('/lesson', lessonRouter);

export default routes;