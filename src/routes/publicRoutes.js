import { Router } from 'express';
import { ViewsController } from '../controllers/PublicViewsController.js'
import { AuthController } from '../controllers/AuthController.js';

const publicRoutes = Router()

//GET routes
publicRoutes.get("/", ViewsController.redirectHome);
publicRoutes.get("/home", ViewsController.renderHome);
publicRoutes.get("/logout", ViewsController.renderLogout);
publicRoutes.get("/login", ViewsController.renderLogin);
publicRoutes.get("/register", ViewsController.renderRegister);

//POST routes
publicRoutes.post('/login', AuthController.postLogin);
publicRoutes.post('/register', AuthController.postRegister);

export default publicRoutes;
