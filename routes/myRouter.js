const myController = require('../controllers/myController.js');
const express = require('express');
const router = express.Router();

router.route("/juego/cartas").post(myController.crearDoc);

router.route("/hello").post('/hello', async (req, res) => {
    let uname = req.body.ruta;
    let userDetails = await getUserDetails(req.db, uname)
    res.status(200).send({
        status: true,
        response: userDetails
    });
});

module.exports = router;