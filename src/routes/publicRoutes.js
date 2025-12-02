import { Router } from 'express';
import { ViewsController } from '../controllers/publicControllers/PublicViewsController.js'
import { AuthController } from '../controllers/publicControllers/AuthController.js';

const publicRoutes = Router()

//GET routes
publicRoutes.get("/", ViewsController.redirectHome);
publicRoutes.get("/home", ViewsController.redirectHome);
publicRoutes.get("/logout", ViewsController.renderLogout);
publicRoutes.get("/login", ViewsController.renderLogin);
publicRoutes.get("/register", ViewsController.renderRegister);


//POST routes
publicRoutes.post('/login', AuthController.postLogin);
publicRoutes.post('/register', AuthController.postRegister);

export default publicRoutes;
