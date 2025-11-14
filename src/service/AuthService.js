import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/UserModel.js';
import validator from 'validator';
import { authTokenAdmin, authTokenAluno } from '../middlewares/checkAuthenticated.js';

export class AuthService {
    static async validLogin({ email, senha }) {

        let authTokenAluno = null;
        let authTokenAdmin = null;

        if (!validator.isEmail(email)) {
            throw { status: 422, msg: 'Email inválido' };
        }

        if (!senha) {
            throw { status: 442, msg: 'Senha invalida' };
        }

        const user = await User.findOne({ email: email });

        if (!user) {
            throw { status: 442, msg: 'Usuário não encontrado' };
        }

        const match = await bcrypt.compare(senha, user.senha);

        if (!match) {
            throw { status: 442, msg: 'Senha incorreta' };
        }

        if (user.escolaridade === "Aluno Etec Itaquera") {
            authTokenAluno = jwt.sign({ id: user._id }, process.env.JWT_SECRET_ALUNO, { expiresIn: '6h' });
        }

        if (user.escolaridade === "Admin Etec Itaquera") {
            authTokenAdmin = jwt.sign({ id: user._id }, process.env.JWT_SECRET_ADMIN, { expiresIn: '6h' });
        }

        const escolaridade = user.escolaridade;


        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '6h' });
        return { token, escolaridade, authTokenAdmin, authTokenAluno, email };
    }

    static async validRegister({ nome, email, escolaridade, senha, senhaCopy }) {

        if (!nome) {
            throw { status: 442, msg: 'O nome é obrigatório!' };
        }

        if (/\d/.test(nome)) {
            throw { status: 442, msg: 'O nome não pode conter números' };
        }

        if (!validator.isEmail(email)) {
            throw { status: 442, msg: 'Email invalido ' };
        }

        if (!escolaridade) {
            throw { status: 442, msg: 'Escolaridade é obrigatória!' };
        }

        if (/\d/.test(escolaridade)) {
            throw { status: 442, msg: 'O campo escolaridade não pode conter números' };
        }

        if (!senha) {
            throw { status: 442, msg: 'O campo senha está vazio' };
        }

        if (senha !== senhaCopy) {
            throw { status: 442, msg: 'As senhas devem ser iguais' };
        }

        const userExistente = await User.findOne({ email: email });

        if (userExistente) {
            throw { status: 442, msg: 'Email já cadastrado, utilize outro email.' };
        }

        const salt = await bcrypt.genSalt(10);
        const passwordHash = await bcrypt.hash(senha, salt);
        const user = new User({
            nome,
            escolaridade,
            email,
            senha: passwordHash,
        });
        await user.save();

    }

    static logout(res) {
        res.clearCookie("token");
        res.clearCookie("authTokenAluno");
        res.clearCookie("authTokenAdmin");
    }

};

