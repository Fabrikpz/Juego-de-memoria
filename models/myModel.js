const mongoose = require("mongoose");

const carta1Schema = new mongoose.Schema({
    nombre: {
        type: String,
        required: [true, "pone nomber"],
    },
    ruta: {
        type: String,
        required: [true, "pone ruta"],
    },
});

const carta1 = mongoose.model('carta1', carta1Schema);

module.exports = carta1;