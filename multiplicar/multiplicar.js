const fs = require('fs');
const colors = require('colors');

const listTable = (base, limit) => {

  return new Promise((resolve, reject) => {

    let data = '';

    for (let i = 0; i <= limit; i++) {
      data += `${base} x ${i} = ${base * i}\n`;
    }

    resolve(data);

  });

}

const createFile = (base, limit) => {
  return new Promise((resolve, reject) => {
    // Validar que se ingrese un Numero.
    if (!Number(base)) {
      reject('El valor introducido no es un numero.');
      return;
    }

    let data = '';

    for (let i = 0; i <= limit; i++) {
      data += `${base} x ${i} = ${base * i}\n`;
    }

    fs.writeFile(`./tablas/tabla-${base}.txt`, data, (error) => {

      if (error) {
        reject(error);
      } else {
        resolve(`tabla-${base}.txt`);
      }

    });

  });
}

module.exports = {
  createFile,
  listTable
}
