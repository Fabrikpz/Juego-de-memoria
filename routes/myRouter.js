const myController = require('../controllers/myController');
const express = require('express');
const router = express.Router();
import {getUserDetails} from '../services/userService.js';

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

router.post('/hello',async (req,res)=>{
    let uname = req.body.nombre;
    let userDetails = await getUserDetails(req.db,uname)
    res.status(200).send({
       status:true,
       response:userDetails
    });
 });

module.exports = router;