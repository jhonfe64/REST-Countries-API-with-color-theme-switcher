const express = require('express');
const path = require('path');
const ejs = require('ejs');
const bodyParser = require('body-parser');



//Inicializations
const app = express();
app.set('port', process.env.PORT || 4000);
app.use(express.json());
//inicializando el motor de ejs
app.set("view engine", "ejs");
//carpeta views
app.set('views', path.join(__dirname, 'views'));

//carpeta public
app.use(express.static(path.join(__dirname, 'public')));
//
require('./lib/home_countries');
app.use(bodyParser.json());

//Rutas 

app.use(require('./routes/index'));























app.listen(app.get('port'), function(){
    console.log("running on port ", app.get('port'))
})