const express = require('express');
const controladorPeliculas = express.Router();

/*
Get -> Obtener todas las peliculas.
Get -> Obtener una pelicula por id.
Get -> Buscar una pelicula por el titulo
POST -> Crear una nueva película.
PUT -> Actualizar películas.
DELETE -> Eliminar una película.
*/

controladorPeliculas.get("/obtenerPeliculas", function(req, res){
    res.send("Listando películas...")
});

module.exports = controladorPeliculas;