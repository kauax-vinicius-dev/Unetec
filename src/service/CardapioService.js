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

    static async editaCardapio(id, campoEscolhido, alteracaoCampo) {
        return await Cardapio.updateOne(
            { _id: id },
            { $set: { [campoEscolhido]: alteracaoCampo } }
        )
    }

    static async quantidadeMerenda(opcao, horario) {
        const quantidadeCardapioCriados = await Cardapio.countDocuments();

        if (quantidadeCardapioCriados === 0) {
            return;
        }
        if (opcao != "Sim" && opcao != "Não") {
            return;
        }

        if (opcao === "Não") {
            return;
        }

        if (horario != "Manhã" && horario != "Tarde" && horario != "Noite") {
            return;
        }

        if (opcao === "Sim" && horario === "Manhã") {
            return await Cardapio.updateOne(
                {},
                { $inc: { quantidadeManha: 1 } }
            )
        }

        if (opcao === "Sim" && horario === "Tarde") {
            return await Cardapio.updateOne(
                {},
                { $inc: { quantidadeTarde: 1 } }
            )
        }
        if (opcao === "Sim" && horario === "Noite") {
            return await Cardapio.updateOne(
                {},
                { $inc: { quantidadeNoite: 1 } }
            )
        }
    }

    static async curtidasCardapio(diaEscolhido) {
        const quantidadeCardapioCriados = await Cardapio.countDocuments();

        if (quantidadeCardapioCriados === 0) {
            return;
        }

        if (!diaEscolhido) {
            return;
        }

        return await Cardapio.updateOne(
            {},
            { $set: { [diaEscolhido]: 1 } }
        )
    }

    static async removeCurtidasCardapio(diaEscolhido, estado) {
        const quantidadeCardapioCriados = await Cardapio.countDocuments();

        if (quantidadeCardapioCriados === 0) {
            return;
        }

        if (!diaEscolhido) {
            return;
        }

        if (estado) {
            return await Cardapio.updateOne({}, { $inc: { [diaEscolhido]: 1 } });

        }

        if (!estado) {
            return await Cardapio.updateOne({}, { $inc: { [diaEscolhido]: -1 } });

        }
    }

} 