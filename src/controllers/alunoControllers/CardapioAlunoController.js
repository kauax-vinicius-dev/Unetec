import { CardapioService } from "../../service/CardapioService.js";

export class CardapioAlunoController {
    static renderFormAlmoco(req, res) {
        res.status(200).render("alunoViews/formCardapioAluno");
    }
    static async renderCardapioAluno(req, res) {
        try {
            const cardapio = await CardapioService.renderCardapio();
            res.status(200).render("alunoViews/dashbordCardapioAluno", { cardapio });
        } catch (error) {
            console.error("Erro ao carregar avisos:", error);
            res.status(500).send("Erro ao carregar a página de cardapio .");
        }
    }

    static async quantidadeMerenda(req, res) {
        try {
            const { opcao, horario } = req.body;
            await CardapioService.quantidadeMerenda(opcao, horario);
            res.status(200).json({ message: 'Oprecação realizada com sucesso' })
        } catch (error) {
            console.error("Erro ao enviar informações", error);
            res.status(500).json({ message: "Erro ao enviar informações" })
        }

    }
}