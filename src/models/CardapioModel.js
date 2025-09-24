import mongoose from "mongoose";

export const Cardapio = mongoose.model('Cardapio', {
    segunda: String,
    terca: String,
    quarta: String,
    quinta: String,
    sexta: String,
    data: {
        type: Date,
        default: Date.now
    },
    like: {
        type: Number,
        default: 0
    },
    status: {
        type: Boolean,
        default: true
    },
});


