const app = require("./config.js");
const port = 2500;
const mongoose = require('mongoose');

const uri = "mongodb+srv://Fabrikpz:lapetit666@cluster0.qn65kvc.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('Conexión a la base de datos establecida');
    // Continuar con la configuración de Express y definición de rutas
  })
  .catch((error) => {
    console.error('Error al conectar a la base de datos:', error);
  });

app.get('/juego', (req, res) => {
  res.render('panel');
});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});