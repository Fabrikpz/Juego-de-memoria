const mongoose = require("mongoose");

const cartaSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
    },
    ruta: {
        type: String,
        required: true,
    },
});

const Carta = mongoose.model('Carta', cartaSchema);

module.exports = Carta;