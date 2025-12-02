import { VisitaTec } from "../models/VisitaTecModel.js";

export class VisitaTecService {

    static async criarVisitaTec({ titulo, descricao, localizacao, pdfLink, dataDaVisita, SalasVisita }) {
        if (!titulo || titulo.trim().length < 3) throw new Error("Título inválido");
        if (!descricao || descricao.trim().length < 3) throw new Error("Descrição inválida");
        if (!localizacao || localizacao.trim().length < 3) throw new Error("Localização inválida");
        if (!dataDaVisita || dataDaVisita.trim().length < 3) throw new Error("Data inválida");
        if (!SalasVisita || SalasVisita.trim().length < 3) throw new Error("Data inválida");
        if (!pdfLink || !pdfLink.startsWith("http")) throw new Error("PDF inválido");
        const visitaTecData = new VisitaTec({
            titulo,
            descricao,
            localizacao,
            pdfLink,
            dataDaVisita,
            SalasVisita,
        })
        await visitaTecData.save();
    }
    static async deletarVisitaTec(id) {
        return await VisitaTec.findByIdAndDelete(id);
    }

    static async renderizaVisitaTec() {
        return await VisitaTec.find();
    }

}