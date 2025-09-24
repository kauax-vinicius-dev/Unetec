import { CardapioService } from "../../service/CardapioService.js";

export class CardapioAdminController {
    static async renderCardapio(req, res) {
        const cardapio = await CardapioService.renderCardapio();
        res.status(200).render("adminViews/dashbordCardapioAdmin", { cardapio });
    }
    static renderFormCardapio(req, res) {
        res.status(200).render("adminViews/formCardapioAdmin")
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
}
