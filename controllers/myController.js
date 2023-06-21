const Carta1 = require('../models/myModel.js');

exports.crearDoc = (req, res) => {
    const carta1 = new Carta1({
        nombre: 'caballero',
        ruta: 'imgs/caballero.png'
    });

    carta1.save()
        .then(() => {
            console.log('La nueva carta se ha guardado en la base de datos');
            res.status(200).render('panel');
            res.status(200).json({ message: 'Documento guardado' });
        })
        .catch((error) => {
            console.error('Se ha producido un error al guardar la carta:', error);
            res.status(500).json({ error: 'Error al guardar el documento' });
        });
};
