import mongoose from "mongoose";

export const VisitaTec = mongoose.model('VisitaTec', {
    titulo: String,
    descricao: String,
    localizacao: String,
    pdfLink: String,
    dataDaVisita:String,
    SalasVisita:String,
    quantidadePessoas: {
        type: Number,
        default: 0
    },

    dataCriacão: {
        type: Date,
        default: Date.now
    }

})