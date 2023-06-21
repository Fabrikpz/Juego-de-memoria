const myController = require('../controllers/myController.js');
const express = require('express');
const router = express.Router();

router.route('/cartas').post(myController.crearDoc);

module.exports = router;