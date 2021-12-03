/*Lo primero es importar modulos requeridos*/

const express = require('express');
const bodyParser = require('body-parser');
const controladorPeliculas = require('./api/peliculas/controller');
/* Ahora iniciamos la instancia o configuracion de express,
es decir creamos la instancia de ese modulo express que creamos */

const app = express();
const port = 3000; // Creamos la variable del puerto y le asignamos el puerto que queramos
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

/* Aqui empezamos a inicializar las rutas
Aqui agregaremos la monitorizacion de tipo get de http */

app.use("/api/peliculas", controladorPeliculas);



// Aquí vamos a configurar el puerto que va a monitorear al API
app.listen(port, function(){
    console.log("API ejecutándose en el puerto " + port);
});
