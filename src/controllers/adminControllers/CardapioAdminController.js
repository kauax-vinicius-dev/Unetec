import { CardapioService } from "../../service/CardapioService.js";

export class CardapioAdminController {
    static async renderCardapio(req, res) {
        const cardapio = await CardapioService.renderCardapio();
        res.status(200).render("adminViews/dashbordCardapioAdmin", { cardapio });
    }
    static renderFormCardapio(req, res) {
        res.status(200).render("adminViews/formCardapioAdmin");
    }

    static renderFormEditCardapio(req, res){
        res.status(200).render("adminViews/formEditCardapioAdmin");
    }

    static async criaCardapio(req, res) {
        try {
            const { segunda, terca, quarta, quinta, sexta } = req.body;
            const cardapio = await CardapioService.criaCardapio({ segunda, terca, quarta, quinta, sexta });
            res.status(200).json({ msg: 'Cardápio criada com sucesso' });
        } catch (error) {
            res.status(500).json(error);
            console.log(error);
        }
    }

    static async excluiCardapio(req, res) {
        try {
            const { id } = req.params;
            await CardapioService.excluiCardapio(id);
            res.status(200).json({ message: "Cardapio excluido com sucesso" });
        } catch (error) {
            console.error("Erro ao carregar cardapio:", error);
            res.status(500).send("Erro ao excluir cardapio");
        }
    }

    static async editarCardapio(req, res) {
        try {
            const { id, campoEscolhido, alteracaoCampoEscolhido } = req.body;
            await CardapioService.editaCardapio(id, campoEscolhido, alteracaoCampoEscolhido);
        } catch (error) {
            console.error("Erro a editar cardapio:", error);
            res.status(500).send("Erro a editar cardapio");
    }


}
}
