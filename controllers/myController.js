const Carta = require('../models/myModel.js');

exports.crearDoc = async (req, res) => {
    let cartasArr = [
        { 'nombre': "bruja", 'ruta': "imgs/bruja.png", 'tipo': "tipo1"},
        { 'nombre': "caballero", 'ruta': "imgs/caballero.png", 'tipo': "tipo2"},
        { 'nombre': "caballeroRojo", 'ruta': "imgs/caballeroRojo.png", 'tipo': "tipo3"},
        { 'nombre': "defensorEstiercol", 'ruta': "imgs/defensorEstiercol.png", 'tipo': "tipo4"},
        { 'nombre': "guardia", 'ruta': "imgs/guardia.png", 'tipo': "tipo5"},
        { 'nombre': "hollowKnight", 'ruta': "imgs/hollowKnight.png", 'tipo': "tipo6"},
        { 'nombre': "hornet", 'ruta': "imgs/hornet.png", 'tipo': "tipo7"},
        { 'nombre': "madreGruz", 'ruta': "imgs/madreGruz.png", 'tipo': "tipo8"},
        { 'nombre': "mantis", 'ruta': "imgs/mantis.png", 'tipo': "tipo9"},
        { 'nombre': "moscaMolesta", 'ruta': "imgs/moscaMolesta.png", 'tipo': "tipo10"},
        { 'nombre': "radiance", 'ruta': "imgs/radiance.png", 'tipo': "tipo11"},
        { 'nombre': "receptaculoRoto", 'ruta': "imgs/receptaculoRoto.png", 'tipo': "tipo12"},
        { 'nombre': "reyPalido", 'ruta': "imgs/reyPalido.png", 'tipo': "tipo13"},
        { 'nombre': "sly", 'ruta': "imgs/sly.png", 'tipo': "tipo14"},
        { 'nombre': "xero", 'ruta': "imgs/xero.png", 'tipo': "tipo15"},
        { 'nombre': "zote", 'ruta': "imgs/zote.png", 'tipo': "tipo16"}
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

//obtiene las rutas de la base de datos y las renderiza en la vista
exports.renderJuego = async (req, res) => {
    try {
        const cartas = await Carta.find({}, 'ruta').limit(16); //obtener las primeras 16 cartas
        const cartasDuplicadas = cartas.concat(cartas); //duplicar las rutas para que se muestren 2 cartas iguales
        const shuffledCartas = shuffleArray(cartasDuplicadas);

        res.render('panel', { cartas: shuffledCartas });
    } catch (error) {
        console.error('Se ha producido un error al obtener las cartas:', error);
        res.status(500).json({ error: 'Error al obtener las cartas' });
    }
};

//pa shufflear las cartas 
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}