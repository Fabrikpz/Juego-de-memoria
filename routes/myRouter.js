const myController = require('../controllers/myController.js');
const express = require('express');
const router = express.Router();

router.get('/juego', myController.renderJuego);

router.route("/juego/cartas").post(myController.crearDoc);

module.exports = router;