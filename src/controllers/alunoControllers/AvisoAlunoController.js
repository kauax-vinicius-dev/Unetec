import { AvisosService } from "../../service/AviosService.js"

export class AvisoAlunoController{

    static async renderAvisos(req, res) {
        try {
            const avisos = await AvisosService.renderizarAvisos();
            res.status(200).render("alunoViews/dashbordAvisosAluno", { avisos });
        } catch (error) {
            console.error("Erro ao carregar avisos:", error);
            res.status(500).send("Erro ao carregar a página de avisos.");
        }
    }

};