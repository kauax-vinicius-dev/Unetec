import { Cardapio } from "../models/CardapioModel.js";

export class CardapioService {
    static async criaCardapio({ segunda, terca, quarta, quinta, sexta }) {
        const quantidadeCardapioCriados = await Cardapio.countDocuments();
        if (segunda.length <= 5 || terca.length <= 5 || quarta.length <= 5 || quinta.length <= 5 || sexta.length <= 5) {
            console.log("Os campos de descrição devem conter ao menos 5 caracteres");
            return;
        };

        if (quantidadeCardapioCriados >= 1) {
            console.log("So é possivel a criacção de um unico cardapio");
            return;
        }

        const cardapio = new Cardapio({
            segunda,
            terca,
            quarta,
            quinta,
            sexta,
        });
        await cardapio.save();
    }

    static async renderCardapio() {
        return await Cardapio.find();
    }

    static async excluiCardapio(id) {
        return await Cardapio.findByIdAndDelete(id);
    }

    static async editaCardapio(id, campoAlterado, alteracao) {
        return await Cardapio.updateOne(
            { _id: id },
            { $set: { [campoAlterado]: alteracao } }
        )
    }


} 