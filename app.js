// const fs = require('fs');
const {crearArchivo} = require('./helpers/multiplicar');
//const argv = require('yargs').argv;
const argv = require('./config/yargs');
const colors = require('colors');

console.clear();

//console.log(process.argv);
// const [ , , arg3 = 'base=5'] = process.argv;
// const [ , base = 5] = arg3.split('=');

//console.log(process.argv);
//console.log(argv); //en yargs

//console.log('base: yargs', argv.b);

//console.log(arg3);
//console.log(base);

//tabla del X hasta 10
//const base = 4;

crearArchivo(argv.b, argv.l, argv.h)
    .then((archivo) => {
        console.log(archivo.rainbow);
    })
    .catch((error) => {
        console.log(error);
    });

//para desarrollo  npm install nodemon --save-dev nodemon
//unistall para desinstalar
//el savedev me creara una dependencia en el package.json
//npm i colors para consola de colores

//npm i colors@1.0.0 version semantica y con el arroba se elije
//npm update actualiza todo lo de la carpeta y actualiza a la ultima version

//para reconstruir todo es el npm install
//git checkout -- . recupero todo