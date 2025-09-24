import { Aviso } from '../models/AvisoModel.js'

export class AvisosService {
    static async criaTarefa({ titulo, descricao, urgencia }) {

        if (titulo.length < 5) {
            alert("Ocorreu um erro na validacão dos campos,tente novamente.");
            return;
        }

        if (titulo.length > 30) {
            alert("Ocorreu um erro na validacão dos campos,tente novamente.");
            return;
        }

        if (descricao.length < 10) {
            alert("Ocorreu um erro na validacão dos campos,tente novamente.");
            return;
        }

        const urgenciasValidas = ["Alta", "Media", "Baixa"];
        if (!urgenciasValidas.includes(urgencia)) {
            alert("Ocorreu um erro na validacão dos campos,tente novamente.");
            return;
        }



        const aviso = new Aviso({
            titulo,
            descricao,
            urgencia,
        });

        await aviso.save();
    }

    static async renderizarAvisos() {
        return await Aviso.find();
    }

    static async excluiAviso(id) {
        return await Aviso.findByIdAndDelete(id);

    }
}