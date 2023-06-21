const mongoose = require("mongoose");

const carta1Schema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
    },
    ruta: {
        type: String,
        required: true,
    },
});

const Carta1 = mongoose.model('Carta1', carta1Schema);

module.exports = Carta1;