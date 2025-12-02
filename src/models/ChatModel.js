import mongoose from "mongoose";

export const Mensagem = mongoose.model('Mensagem', {
      idRemetente:String,
      nomeRemetente:String,
      text: String,
});

