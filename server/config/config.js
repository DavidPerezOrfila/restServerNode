/**
 *  puerto
 */

process.env.PORT = process.env.PORT || 3000;




/**
 *  Entorno
 */

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';



/**
 * Base de Datos
 */

let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = 'mongodb://cafeadmin:Cafe2018@ds115442.mlab.com:15442/cafeudemy';

}

process.env.URLDB = urlDB;