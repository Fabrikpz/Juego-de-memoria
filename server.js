const mongoose = require('mongoose');
const express = require("express");
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const path = require('path');
const port = 3000;
const myRouter = require("./routes/myRouter.js");
const cors = require('cors');

app.use(cors());

app.use(express.static('./', {
  setHeaders: (res, path) => {
    if (path.endsWith('.js')) {
      res.setHeader('Content-Type', 'application/javascript');
    }
  }
}));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(morgan('dev'));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use('/imgs', express.static(path.join(__dirname, 'public/imgs')));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const uri = "mongodb+srv://Fabrikpz:lapetit666@cluster0.qn65kvc.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('Conexión a la base de datos establecida');
  })
  .catch((error) => {
    console.error(error);
  });

//Rutas
app.use("/", myRouter);

app.listen(2500, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});

module.exports = app;