import { AuthService } from '../../service/AuthService.js';

export class viewsAdminController {
    static renderDashbordAdmin(req, res) {
        res.status(200).render("adminViews/dashbordAdmin");
    }

    static renderFormAvisosAdmin(req, res) {
        res.status(200).render("adminViews/formAvisosAdmin");
    }

    static renderDashbordConta(req, res) {
        res.status(200).render("adminViews/dashbordContaAdmin")
    }
    static async logout(req, res) {
        try {
            AuthService.logout(res);
            res.status(201).json({ msg: 'Logout efetuado com sucesso' });
        } catch (error) {
            res.status(500).json({ msg: 'Erro no servidor.' });
            console.log(error);
        }
    }


}