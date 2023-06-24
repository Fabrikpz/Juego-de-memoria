const Carta = require('../models/myModel.js');

exports.crearDoc = async (req, res) => {
    let cartasArr = [
        { 'nombre': "bruja", 'ruta': "imgs/bruja.png" },
        { 'nombre': "caballero", 'ruta': "imgs/caballero.png" },
        { 'nombre': "caballeroRojo", 'ruta': "imgs/caballeroRojo.png" },
        { 'nombre': "defensorEstiercol", 'ruta': "imgs/defensorEstiercol.png" },
        { 'nombre': "guardia", 'ruta': "imgs/guardia.png" },
        { 'nombre': "hollowKnight", 'ruta': "imgs/hollowKnight.png" },
        { 'nombre': "hornet", 'ruta': "imgs/hornet.png" },
        { 'nombre': "madreGruz", 'ruta': "imgs/madreGruz.png" },
        { 'nombre': "mantis", 'ruta': "imgs/mantis.png" },
        { 'nombre': "moscaMolesta", 'ruta': "imgs/moscaMolesta.png" },
        { 'nombre': "radiance", 'ruta': "imgs/radiance.png" },
        { 'nombre': "receptaculoRoto", 'ruta': "imgs/receptaculoRoto.png" },
        { 'nombre': "reyPalido", 'ruta': "imgs/reyPalido.png" },
        { 'nombre': "sly", 'ruta': "imgs/sly.png" },
        { 'nombre': "xero", 'ruta': "imgs/xero.png" },
        { 'nombre': "zote", 'ruta': "imgs/zote.png" }
    ];

    try {
        for (const cartaObj of cartasArr) {
            const carta = new Carta(cartaObj);
            await carta.save();
        }
        console.log('Las nuevas cartas se han guardado en la base de datos');
        res.status(200).json({ message: 'Documentos con las cartas guardados' });
    } catch (error) {
        console.error('Se ha producido un error al guardar las cartas:', error);
        res.status(500).json({ error: 'Error al guardar los documentos con las cartas' });
    }
};

exports.getUserDetails = async (req, res) => {
    const getUserDetails = (ruta) => {
        return new Promise((resolve, reject) => {
            Carta.findOne({ 'ruta': ruta }, (err, doc) => {
                if (err) {
                    reject(err);
                } else if (doc) {
                    resolve(doc);
                } else {
                    reject(new Error('No se encontró la ruta'));
                }
            });
        });
    };

    try {
        let uname = req.body.ruta;
        let userDetails = await getUserDetails(uname);
        res.status(200).send({
            status: true,
            response: userDetails
        });
    } catch (error) {
        res.status(500).send({
            status: false,
            error: error.message || 'Error desconocido'
        });
    }
};

