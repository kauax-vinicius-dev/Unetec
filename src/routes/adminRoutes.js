import { Router } from "express";
import { authToken } from "../middlewares/checkAuthenticated.js";
import { authTokenAdmin } from "../middlewares/checkAuthenticated.js";
import { AvisosAdminController } from "../controllers/adminControllers/AvisoAdminController.js";
import { viewsAdminController } from "../controllers/adminControllers/viewsAdminController.js";
import { CardapioAdminController } from "../controllers/adminControllers/CardapioAdminController.js";
import { ConfigAdminController } from "../controllers/adminControllers/ConfigAdminController.js";
import { ChatAdminController } from "../controllers/adminControllers/ChatAdminController.js";
import { VisitaTecAdminController } from "../controllers/adminControllers/visitaTecController.js";

const adminRoutes = Router();

//Get routers
adminRoutes.get("/dashbordAdmin", authToken, authTokenAdmin, viewsAdminController.renderDashbordAdmin);
adminRoutes.get("/dashbordAvisosAdmin", authToken, authTokenAdmin, AvisosAdminController.renderAvisos);
adminRoutes.get("/dashbordAvisosAdmin/Form", authToken, authTokenAdmin, viewsAdminController.renderFormAvisosAdmin);
adminRoutes.get("/dashbordCardapioAdmin", authToken, authTokenAdmin, CardapioAdminController.renderCardapio);
adminRoutes.get("/dashbordCardapioAdmin/Form", authToken, authTokenAdmin, CardapioAdminController.renderFormCardapio);
adminRoutes.get("/dashbordCardapio/Form/Edit/:id", authToken, authTokenAdmin, CardapioAdminController.renderFormEditCardapio);
adminRoutes.get("/dashbordContaAdmin", authToken, authTokenAdmin, viewsAdminController.renderDashbordConta);
adminRoutes.get("/dashbordConfigAdmin", authToken, authTokenAdmin, ConfigAdminController.renderDashbordConfig);
adminRoutes.get("/dashbordChatAdmin", authToken, authTokenAdmin, ChatAdminController.renderChat)
adminRoutes.get("/dashbordVisitaTecnicaAdmin", authToken, authTokenAdmin, VisitaTecAdminController.renderVisitaTec);
adminRoutes.get("/dashbordVisitaTecnicaAdmin/Form", authToken, authTokenAdmin, VisitaTecAdminController.renderFormVisitaTec);


//Post routers
adminRoutes.post("/dashbordAvisosAdmin/Form", authToken, authTokenAdmin, AvisosAdminController.criaAvisos);
adminRoutes.post("/dashbordCardapioAdmin/Form", authToken, authTokenAdmin, CardapioAdminController.criaCardapio);
adminRoutes.post("/dashbordCardapio/Form/Edit/:id", authToken, authTokenAdmin, CardapioAdminController.editarCardapio);
adminRoutes.post("/dashbordContaAdmin", authToken, authTokenAdmin, viewsAdminController.logout);
adminRoutes.post("/dashbordVisitaTecnicaAdmin/Form", authToken, authTokenAdmin, VisitaTecAdminController.criaVisitaTec);






//Delet routers
adminRoutes.delete("/dashbordAvisosAdmin/Delete/:id", authToken, authTokenAdmin, AvisosAdminController.excluirAvisos);
adminRoutes.delete("/dashbordCardapioAdmin/Delete/:id", authToken, authTokenAdmin, CardapioAdminController.excluiCardapio);

export default adminRoutes;