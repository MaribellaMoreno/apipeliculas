const modeloPeliculas = require('./model');

/*
    EL SERVICIO ES LA LÓGICA DEL API
        -> RECIBIR DATOS DEL CONTROLADOR
        -> MANIPULAR DATOS OSEA TRANSFORMARLOS POR MEDIO DE OPERACIONENES LÓGICAS Y MATEMÁTICAS
            -> CONSULTAR EN EL MODELO DATOS DE LA BASE DE DATOS
            -> ENVIAR AL MODELO DATOS PARA ALMACENAR
        ->ENVIAR AL CONTROLADOR DATOS PARA LA RESPUESTA DE LA PETICIÓN 
*/

function obtenerPeliculas(){
    let peliculas = modeloPeliculas.findAll();
    return peliculas;
}

module.exports.obtenerPeliculas = obtenerPeliculas;