// Importações
import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import rota from './routes/router.js';
import conectarMongo from './config/config.js';
import path from 'path';
import jwt from 'jsonwebtoken';
import cookieParser from 'cookie-parser';


// Criando o app antes da conexão
const app = express();
const port = 3000;

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
app.use(rota);

// Iniciando o servidor
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
    console.log(`http://localhost:${port}`)
});


