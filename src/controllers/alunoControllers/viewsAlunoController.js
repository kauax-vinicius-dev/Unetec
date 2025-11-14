import { AuthService } from '../../service/AuthService.js';

export class viewsAlunoController {
    static renderDashbordAluno(req, res) {
        res.status(200).render("alunoViews/dashbordAluno");
    }

    static renderDashborConta(req, res) {
        res.status(200).render("alunoViews/dashbordContaAluno")
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