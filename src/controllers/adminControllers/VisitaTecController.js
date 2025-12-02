import { VisitaTecService } from "../../service/VisitaTecService.js";

export class VisitaTecAdminController {
    static async renderVisitaTec(req, res) {
        try {
            const visitasTec = await VisitaTecService.renderizaVisitaTec();
            res.status(200).render("adminViews/dashbordVisitaTecAdmin", { visitasTec });
        } catch (error) {
            console.error("Erro ao carregar visitas:", error);
            res.status(500).send("Erro ao carregar a página de visitas téc.");
        }
    }

    static async renderFormVisitaTec(req, res) {
        try {
            res.status(200).render("adminViews/formVisitaTecAdmin");
        } catch (error) {
            console.error("Erro ao carregar form:", error);
            res.status(500).send("Erro ao carregar form de visitas téc.");
        }
    }

    static async criaVisitaTec(req, res) {
        try {
            const { titulo, descricao, localizacao, pdfLink, dataDaVisita, SalasVisita } = req.body;
            const visitaTec = await VisitaTecService.criarVisitaTec({ titulo, descricao, localizacao, pdfLink, dataDaVisita, SalasVisita })
            res.status(200).json({ msg: 'Visita Téc. criada com sucesso' });
        } catch (error) {
            res.status(500).json(error);
            console.log(error);
        }
    }
}