
const { argv } = require('./config/yargs');
const colors = require('colors');
const { createFile, listTable } = require('../03-bases-node/multiplicar/multiplicar');

let command = argv._[0];

switch (command) {

  case 'listar':
    listTable(argv.base, argv.limit)
      .then(data => console.log(data))
      .catch(error => console.log(error))
    break;

  case 'crear':
    createFile(argv.base, argv.limit)
      .then(file => console.log(`File created: ${file.green}`))
      .catch(error => console.log(error))
    break;

  default:
    console.log('Comando no reconocido');
    break;

}
