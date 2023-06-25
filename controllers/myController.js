const Carta = require('../models/myModel.js');
const { obtenerValores, enviarValores } = require('../data.js');

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

        const cartasGuardadas = await Carta.find(); //guardar en una variable todas las cartas guardadas

        console.log('Las nuevas cartas se han guardado en la base de datos');
        res.status(200).json({ message: 'Documentos con las cartas guardados' });
    } catch (error) {
        console.error('Se ha producido un error al guardar las cartas:', error);
        res.status(500).json({ error: 'Error al guardar los documentos con las cartas' });
    }
};

//obtiene las rutas de la base de datos y las renderiza en la vista
exports.renderJuego = async (req, res) => {
    try {
        const cartas = await Carta.find({}, 'ruta').limit(16); //obtener las primeras 16 cartas
        //const rutas = cartas.map(carta => carta.ruta); //extraer los valores de 'ruta'

        const cartasDuplicadas = cartas.concat(cartas); //duplicar las rutas para que se muestren 2 cartas iguales

        const shuffledCartas = shuffleArray(cartasDuplicadas);

        res.render('panel', { cartas: shuffledCartas });
    } catch (error) {
        console.error('Se ha producido un error al obtener las cartas:', error);
        res.status(500).json({ error: 'Error al obtener las cartas' });
    }
};

// Helper function to shuffle an array
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}