import { AvisosService } from "../../service/adminItaquera/AviosService.js"

export class AvisosController {

    static async criaAviso(req, res) {
        try {
            const { titulo, descricao, urgencia } = req.body;
            const aviso = await AvisosService.criaTarefa({ titulo, descricao, urgencia });
            res.status(200).json({ msg: 'Tarefa criada com sucesso' });
        } catch (error) {
            res.status(500).json(error);
            console.log(error);

        }
    }

    static async renderizaAvisos(req, res) {
        try {
            const avisos = await AvisosService.renderizarAvisos();
            res.status(200).render("viewsAdminEtec/dashbordEtecAvisos", { avisos });
        } catch (error) {
            console.error("Erro ao carregar avisos:", error);
            res.status(500).send("Erro ao carregar a página de avisos.");
        }
    }

    static async excluiAviso(req, res) {
        try {
            const { id } = req.params;
            await AvisosService.excluiAviso(id);
            res.status(200).json({ message: "Aviso excluído com sucesso!" });
        } catch (error) {
            console.error("Erro ao carregar avisos:", error);
            res.status(500).send("Erro ao excluir aviso");
        }
    }
}