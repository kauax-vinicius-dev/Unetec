import mongoose from "mongoose";

export const Aviso = mongoose.model('Aviso', {
    titulo: String,
    descricao: String,
    data: {
        type: Date,
        default: Date.now
    },
    urgencia: String,
});