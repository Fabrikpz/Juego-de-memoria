const myController = require('../controllers/myController');
const express = require('express');
const router = express.Router();

router.route('/').get(myController.juego);

const Jugador = require('../models/jugador');

router.get('/jugadores', async (req, res, next) => {
    try {
        const jugadores = await Jugador.find();
        res.json(jugadores);
    } catch (err) {
        next(err);
    }
});

module.exports = router;