const Carta1 = require('../models/myModel');

exports.crearDoc = (req, res) => {
    const carta1 = {
        nombre: 'caballero',
        ruta: 'imgs/caballero.png'
    };
    
    Carta1.create(carta1)
    .then(() => {
        console.log('La nueva carta se ha guardado en la base de datos');
        res.status(200).render('panel');
    })
    .catch((error) => {
        console.error('Se ha producido un error al guardar la carta:', error);
        res.status(500).send('Error al guardar la carta');
    });
};