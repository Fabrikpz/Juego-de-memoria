const mongoose = require("mongoose");

const jugadorSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    imagenURL: { type: String, required: true }
});

const Jugador = mongoose.model('Jugador', jugadorSchema);

module.exports = Jugador;