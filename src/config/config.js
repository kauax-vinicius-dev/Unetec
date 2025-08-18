import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const conectarMongo = () => {
  const dbUser = process.env.DB_USER;
  const dbPass = process.env.DB_PASS;

  // Conectando ao MongoDB
  mongoose.connect(
    `mongodb+srv://${dbUser}:${dbPass}@cluster0.7h3ya0p.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
  )
    .then(() => {
      console.log('Conectado ao banco de dados');
    })
    .catch((err) => console.log('Erro ao conectar ao banco:', err));
}

export default conectarMongo; 



