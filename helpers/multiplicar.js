const fs = require('fs');
const colors = require('colors');

const crearArchivo = (base = 5, listar = false, hasta = 10) => {
    
    let salida = '';
    let consola = '';

    for (let index = 1; index <= hasta; index++) {
        salida += `${base} x ${index} = ${base * index}\n`;
        consola += `${base} ${'x'.green} ${index} ${'='.green} ${base * index}\n`;
    }

    if(listar){
        console.log('===================='.green);
        console.log(`    Tabla del: ${colors.blue(base)}    `.green);
        console.log('===================='.green);

        console.log(consola);
    }

    // fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
    //     if(err){
    //         throw err;
    //     }

    //     console.log(`tabla-${base}.txt creado`);
    // });

    //para atrapar el error en un filesync es por un trycatch
    
    return new Promise((resolve, reject) => {   
        try {
            fs.writeFileSync(`./salida/tabla-${base}.txt`, salida); 
            resolve(`tabla-${base}.txt creado`);
            //console.log(`tabla-${base}.txt creado`);
        } catch (error) {
            reject(error);
        }     
    });

    
};

module.exports = { 
    crearArchivo
}