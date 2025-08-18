import { Router } from 'express';
import { authToken, authTokenAluno, tokenAdminEtec } from '../middlewares/checkAuthenticated.js';
import { ViewsController } from '../controllers/ViewsController.js'
import { AuthController } from '../controllers/AuthController.js';
import { AvisosController } from '../controllers/adminItaquera/aviosController.js';
import { AlunoController } from '../controllers/alunoEtec/alunoController.js';


const rota = Router()

//GET routes
rota.get("/", ViewsController.redirectHome);

rota.get("/home", ViewsController.renderHome);

rota.get("/logout", ViewsController.renderLogout);

rota.get("/login", ViewsController.renderLogin);

rota.get("/register", ViewsController.renderRegister);

// Routes private
rota.get("/dashbordEtecAdmin", authToken, tokenAdminEtec, ViewsController.renderDashbordEtecAdmin);

rota.get("/dashbordEtecAvisosAdmin", authToken, tokenAdminEtec, AvisosController.renderizaAvisos);

rota.get("/dashbordEtecAvisosAdmin/Form", authToken, tokenAdminEtec, ViewsController.renderFormAvisos);

//POST routes
rota.post('/login', AuthController.postLogin);

rota.post('/register', AuthController.postRegister);

rota.post('/dashbordEtecAvisosAdmin/Form', authToken, tokenAdminEtec, AvisosController.criaAviso);

//Delete routes
rota.delete('/dashbordEtecAvisosAdmin/Delete/:id', authToken, tokenAdminEtec, AvisosController.excluiAviso);

//Routes aluno
rota.get('/dashbordEtecAluno', authToken, authTokenAluno, ViewsController.renderDashbordEtecAluno);
rota.get('/dashbordAlunoAviso', authToken, authTokenAluno, AlunoController.renderizaAvisos);

export default rota;
