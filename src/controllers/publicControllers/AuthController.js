import e from 'cors';
import { AuthService } from '../../service/AuthService.js';

export class AuthController {

    static async postLogin(req, res) {
        try {
            const { email, senha } = req.body;
            const { token, escolaridade, authTokenAdmin, authTokenAluno, email: userEmail, nome: userNome, userId: userId } = await AuthService.validLogin({ email, senha });
            res.cookie("token", token, {
                httpOnly: true,
                secure: false,
                sameSite: "strict",
            });

            if (authTokenAdmin) {
                res.cookie("authTokenAdmin", authTokenAdmin, {
                    httpOnly: true,
                    secure: false,
                    sameSite: "strict",
                });
            }

            if (authTokenAluno) {
                res.cookie("authTokenAluno", authTokenAluno, {
                    httpOnly: true,
                    secure: false,
                    sameSite: "strict",
                });
            }


            let redirectUrl;

            if (escolaridade === "Aluno Etec Itaquera") {
                redirectUrl = '/dashbordAluno';
            }

            if (escolaridade === "Admin Etec Itaquera") {
                redirectUrl = '/dashbordAdmin';
            }

            res.status(200).json({ msg: 'Login concluído com sucesso', redirectUrl, email: userEmail, nome: userNome, userId: userId });
        } catch (error) {
            res.status(500).json(error);
            console.log(error);
        }
    }



    static async postRegister(req, res) {
        try {
            const { nome, email, escolaridade, senha, senhaCopy } = req.body;
            const result1 = await AuthService.validRegister({ nome, email, escolaridade, senha, senhaCopy });
            res.status(201).json({ msg: 'Usuário criado com sucesso' });
        } catch (error) {
            res.status(500).json({ msg: 'Erro no servidor.' });
            console.log(error);
        }
    }

};