const mongoose = require("mongoose");

const carta1Schema = new mongoose.Schema({
    nombre: {
        type: String,
        required: [true, "Por favor, proporciona un nombre"],
    },
    ruta: {
        type: String,
        required: [true, "Por favor, proporciona una ruta"],
    },
});

const Carta1 = mongoose.model('carta1', carta1Schema);

module.exports = Carta1;