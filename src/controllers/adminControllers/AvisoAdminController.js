import { AvisosService } from "../../service/AviosService.js"

export class AvisosAdminController {

    static async criaAvisos(req, res) {
        try {
            const { titulo, descricao, urgencia } = req.body;
            const aviso = await AvisosService.criaTarefa({ titulo, descricao, urgencia });
            res.status(200).json({ msg: 'Tarefa criada com sucesso' });
        } catch (error) {
            res.status(500).json(error);
            console.log(error);

        }
    }

    static async renderAvisos(req, res) {
        try {
            const avisos = await AvisosService.renderizarAvisos();
            res.status(200).render("adminViews/dashbordAvisosAdmin", { avisos });
        } catch (error) {
            console.error("Erro ao carregar avisos:", error);
            res.status(500).send("Erro ao carregar a página de avisos.");
        }
    }

    static async excluirAvisos(req, res) {
        try {
            const { id } = req.params;
            await AvisosService.excluiAviso(id);
            res.status(200).json({ message: "Aviso excluído com sucesso!" });
        } catch (error) {
            console.error("Erro ao carregar avisos:", error);
            res.status(500).json({ message: "Erro ao excluir aviso" });
        }
    }
}