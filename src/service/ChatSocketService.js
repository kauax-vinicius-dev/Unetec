import { Mensagem } from "../models/ChatModel.js";

export class ChatSocketService {
    static async criaMensagem(data) {
        const mensagem = new Mensagem({
            idRemetente: data.idRemetente,
            nomeRemetente: data.nomeRemetente,
            text: data.text,
        })
        return await mensagem.save();
    }
    static async renderMensagens() {
        return await Mensagem.find();
    }
}
