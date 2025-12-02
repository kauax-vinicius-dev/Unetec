import { ChatSocketService } from "../../service/ChatSocketService.js";

export class ChatAdminController {
    static async renderChat(req, res) {
        const mensagens = await ChatSocketService.renderMensagens();
        res.status(200).render("adminViews/dashbordChatAdmin", { mensagens });
    }


    static async criarMensagem(data, socket, io) {
        try {
            const mensagemSalva = await ChatSocketService.criaMensagem(data, socket, io);
            console.log(data)
        } catch (error) {
            console.error("Erro ao criar mensagem:", error);
        }

    }


}