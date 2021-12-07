const express = require('express');
const controladorUsuarios = express.Router();

/*  GET -> inicias sesión.
    GET -> obtener un usuario por el id.
*/

controladorUsuarios.get("/iniciarSesion", function(req, res){
    let datos = req.query;
    res.send("Los datos del usuario son: " + datos.usuario + " " + datos.contrasena)
});

module.exports = controladorUsuarios;