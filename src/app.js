// Importações
import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import publicRoutes from './routes/publicRoutes.js';
import adminRoutes from './routes/adminRoutes.js';
import alunoRoutes from './routes/alunoRoutes.js';
import conectarMongo from './config/dbConfig.js';
import path from 'path';
import cookieParser from 'cookie-parser';
import { Server as SocketIoServer } from "socket.io";
import { createServer } from 'http';
import  chatSocket  from './socket/socket.js'




// Criando o app antes da conexão
const app = express();
const port = 3000;
const httpServer = createServer(app);
const io = new SocketIoServer(httpServer);

chatSocket(io);



// Conectando ao banco
conectarMongo();

// Configurando JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }))


// Configurando a engine para carregar os .ejs
app.set('view engine', 'ejs');
app.set('views', './src/views');

app.use(express.static(path.resolve('public')));


// Configurando cors
app.use(cors());

app.use(cookieParser());

// Usando as rotas
app.use(publicRoutes);
app.use(adminRoutes);
app.use(alunoRoutes);

// Iniciando o servidor
httpServer.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
    console.log(`http://localhost:${port}`)
});



