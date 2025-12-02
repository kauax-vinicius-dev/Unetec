import { Router } from "express";
import { authTokenAluno } from "../middlewares/checkAuthenticated.js";
import { authToken } from "../middlewares/checkAuthenticated.js";
import { AvisoAlunoController } from "../controllers/alunoControllers/AvisoAlunoController.js";
import { viewsAlunoController } from "../controllers/alunoControllers/viewsAlunoController.js";
import { CardapioAlunoController } from "../controllers/alunoControllers/CardapioAlunoController.js";
import { ConfigUserController } from "../controllers/alunoControllers/ConfigUserController.js";
import { ChatUserController } from "../controllers/alunoControllers/ChatUserController.js";

const alunoRoutes = Router();

//Get routers
alunoRoutes.get("/dashbordAluno", authToken, authTokenAluno, viewsAlunoController.renderDashbordAluno);
alunoRoutes.get("/dashbordAvisosAluno", authToken, authTokenAluno, AvisoAlunoController.renderAvisos);
alunoRoutes.get("/dashbordCardapioAluno", authToken, authTokenAluno, CardapioAlunoController.renderCardapioAluno);
alunoRoutes.get("/dashbordCardapioAluno/formAlmoco", authToken, authTokenAluno, CardapioAlunoController.renderFormAlmoco);
alunoRoutes.get("/dashbordConta", authToken, authTokenAluno, viewsAlunoController.renderDashborConta);
alunoRoutes.get("/dashbordConfig", authToken, authTokenAluno, ConfigUserController.renderConfigDashbord);
alunoRoutes.get("/dashbordChat", authToken, authTokenAluno, ChatUserController.renderChat);

//POST routers
alunoRoutes.post("/dashbordCardapioAluno/formAlmoco", authToken, authTokenAluno, CardapioAlunoController.quantidadeMerenda);
alunoRoutes.post("/dashbordCardapioAluno", authToken, authTokenAluno, CardapioAlunoController.curteCardapio);
alunoRoutes.post("/dashbordConta", authToken, authTokenAluno, viewsAlunoController.logout);
 
export default alunoRoutes;