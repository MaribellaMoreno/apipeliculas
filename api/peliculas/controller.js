const express = require('express');
const controladorPeliculas = express.Router();
const servicioPeliculas = require('./service');


/* Que hace este archivo de controlador pues:
    -> Recibir datos del cliente --> desde la petición 
    -> Pasar al servicio
    -> Recibir datos del servicio
    -> Enviar una respuesta
*/

/*
Get -> Obtener todas las peliculas.
Get -> Obtener una pelicula por id.
Get -> Buscar una pelicula por el titulo
POST -> Crear una nueva película.
PUT -> Actualizar películas.
DELETE -> Eliminar una película.
*/

controladorPeliculas.get("/obtenerPeliculas", function(req, res){
    let peliculas = servicioPeliculas.obtenerPeliculas();
    res.send({
        "mensaje": "Listado de películas",
        "data": peliculas
    });
});

module.exports = controladorPeliculas;