const myController = require('../controllers/myController.js');
const express = require('express');
const router = express.Router();

router.route("/juego/cartas").post(myController.crearDoc);

module.exports = router;