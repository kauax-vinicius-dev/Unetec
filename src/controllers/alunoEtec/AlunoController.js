import { AvisosService } from "../../service/adminItaquera/AviosService.js"

 export class AlunoController{

    static async renderizaAvisos(req, res) {
        try {
            const avisos = await AvisosService.renderizarAvisos();
            res.status(200).render("viewsAlunoEtec/dashbordAvisosAluno", { avisos });
        } catch (error) {
            console.error("Erro ao carregar avisos:", error);
            res.status(500).send("Erro ao carregar a página de avisos.");
        }
    }

 };