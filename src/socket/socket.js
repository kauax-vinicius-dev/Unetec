import { ChatUserController } from "../controllers/alunoControllers/ChatUserController.js";

export default async function chatSocket(io) {
    io.on('connection', async (socket) => {
        console.log(`Socket conectado: ${socket.id}`);
        
        socket.on('sendMessage', async (data) => {
            await ChatUserController.criarMensagem(data, socket, io);
            socket.broadcast.emit('receivedMessage', data);
        })
    })
}