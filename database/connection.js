// IMPORTAR LOS MÓDULOS para hacer la conexion a base de datos
const mongoClient = require('mongodb').MongoClient; // mongoClient es una clase que nos permite poder crear las conexiones a mongo
require('dotenv').config(); // traemos dotenv y le agregamos .config para poder utilizar nuestro archivo de onfiguración y poder cargar los datos de conexión a nuestro servidor de mongo

let conexion; //aqui definimos la variable conexion para que sea usada en la funcion de conectar

const conectar = function(){ //funcion conectar para que sea usada en la conexion con la bd
    return new Promise(function(resolve, reject){
        if(conexion){
            resolve();
        }
        else{
            mongoClient.connect(process.env.MONGODB_URI, {useNewUrlParser: true})
                .then(function(client){
                    conexion = client.db(process.env.MONGODB_DB);
                    resolve();
                })
                .catch(function(error){
                    reject(error);
                });
        }
    });
}

const obtenerConexion = function(){
    return conexion;
}

module.exports = {conectar, obtenerConexion}
