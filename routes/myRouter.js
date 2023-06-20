const myController = require('../controllers/myController');
const express = require('express');
const router = express.Router();

router.route('/juego').post(myController.crearDoc);

module.exports = router;