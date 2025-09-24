import { Router } from "express";
import { authTokenAluno } from "../middlewares/checkAuthenticated.js";
import { authToken } from "../middlewares/checkAuthenticated.js";
import { AvisoAlunoController } from "../controllers/alunoControllers/AvisoAlunoController.js";
import { viewsAlunoController } from "../controllers/alunoControllers/viewsAlunoController.js";
import { CardapioAlunoController } from "../controllers/alunoControllers/CardapioAlunoController.js";

const alunoRoutes = Router();

//Get routers
alunoRoutes.get("/dashbordAluno", authToken, authTokenAluno, viewsAlunoController.renderDashbordAluno);
alunoRoutes.get("/dashbordAvisosAluno", authToken, authTokenAluno, AvisoAlunoController.renderAvisos);
alunoRoutes.get("/dashbordCardapioAluno", authToken, authTokenAluno, CardapioAlunoController.renderCardapioAluno);


export default alunoRoutes;