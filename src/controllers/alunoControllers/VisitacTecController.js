import { VisitaTecService } from "../../service/VisitaTecService.js";

export class VisitaTecUser {
    static async renderVisitaTec(req, res) {
        try {
            const visitasTec = await VisitaTecService.renderizaVisitaTec();
            res.status(200).render("alunoViews/dashbordVisitaTec", { visitasTec });
        } catch (error) {
            console.error("Erro ao carregar visitas:", error);
            res.status(500).send("Erro ao carregar a página de visitas téc.");
        }
    }
}