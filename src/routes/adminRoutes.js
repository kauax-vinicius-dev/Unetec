import { Router } from "express";
import { authToken } from "../middlewares/checkAuthenticated.js";
import { authTokenAdmin } from "../middlewares/checkAuthenticated.js";
import { AvisosAdminController } from "../controllers/adminControllers/AvisoAdminController.js";
import { viewsAdminController } from "../controllers/adminControllers/viewsAdminController.js";
import { CardapioAdminController } from "../controllers/adminControllers/CardapioAdminController.js";

const adminRoutes = Router();

//Get routers
adminRoutes.get("/dashbordAdmin", authToken, authTokenAdmin, viewsAdminController.renderDashbordAdmin);
adminRoutes.get("/dashbordAvisosAdmin", authToken, authTokenAdmin, AvisosAdminController.renderAvisos);
adminRoutes.get("/dashbordAvisosAdmin/Form", authToken, authTokenAdmin, viewsAdminController.renderFormAvisosAdmin);
adminRoutes.get("/dashbordCardapioAdmin", authToken, authTokenAdmin, CardapioAdminController.renderCardapio);
adminRoutes.get("/dashbordCardapioAdmin/Form", authToken, authTokenAdmin, CardapioAdminController.renderFormCardapio);

//Post routers
adminRoutes.post("/dashbordAvisosAdmin/Form", authToken, authTokenAdmin, AvisosAdminController.criaAvisos);
adminRoutes.post("/dashbordCardapioAdmin/Form", authToken, authTokenAdmin, CardapioAdminController.criaCardapio);

//Delet routers
adminRoutes.delete("/dashbordAvisosAdmin/Delete/:id", authToken, authTokenAdmin, AvisosAdminController.excluirAvisos);

export default adminRoutes;