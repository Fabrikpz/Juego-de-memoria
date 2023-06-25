/*const axios = require('axios');

// Función para obtener los valores de la base de datos
const obtenerValores = async () => {
    try {
        const response = await axios.get('http://localhost:2500/juego/cartas');
        return response.data;
    } catch (error) {
        throw new Error('Error al obtener los valores de la base de datos');
    }
};

// Función para enviar los valores a la ruta "hello"
const enviarValores = async (ruta) => {
    try {
        const response = await axios.post('http://localhost:2500/hello', { ruta });
        return response.data;
    } catch (error) {
        throw new Error('Error al enviar los valores a la ruta "hello"');
    }
};

module.exports = {
    obtenerValores: obtenerValores, 
    enviarValores: enviarValores
};*/

/*const axios = require('axios');

const obtenerValores = async () => {
    try {
        const response = await axios.get('http://localhost:2500/juego/cartas');
        return response.data;
    } catch (error) {
        console.error('Error al obtener los valores de la base de datos:', error);
        throw new Error('Error al obtener los valores de la base de datos');
    }
};

module.exports = { obtenerValores };*/
