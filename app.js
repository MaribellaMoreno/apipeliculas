/*Lo primero es importar modulos requeridos*/

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const controladorPeliculas = require('./api/peliculas/controller');
const controladorUsuarios = require('./api/usuarios/controller');
const conexion = require('./database/connection');
require('dotenv').config();
// process.env.PORT

/* Ahora iniciamos la instancia o configuracion de express,
es decir creamos la instancia de ese modulo express que creamos */

const app = express();
const port = process.env.PORT;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan(process.env.MORGAN_MODE));

/* Aqui empezamos a inicializar las rutas
Aqui agregaremos la monitorizacion de tipo get de http */

app.use("/api/peliculas", controladorPeliculas);
app.use("/api/usuarios", controladorUsuarios);



// Aquí vamos a configurar el puerto que va a monitorear al API
// Esta es la única conexion a la base de datos con mongodb
conexion.conectar()
    .then(function(){
        app.listen(port, function(){
            console.log("API ejecutándose en el puerto " + port);
        });
    })
    .catch(function(error){
        console.log(error);
    });

