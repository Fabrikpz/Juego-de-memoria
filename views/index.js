const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const path = require('path');
const port = 2500;
const app = express();

app.set('view engine', 'ejs');
app.set('views',path.join(__dirname, 'views'));

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, "public")));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.render('panel');
});

/*app.get('/inicio', (req, res) => {
  const { name, edad, apellido } = req.body;
  console.log(`Nombre: ${name}, Edad: ${edad}, Apellido: ${apellido}`);
  let arr = {name:"patrisio", edad:"12",apellido:"gallo filon"}
  res.render('panel', arr);
});*/

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});