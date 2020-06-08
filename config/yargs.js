// Opciones
const options = {
  base: {
    demand: true,
    alias: 'b'
  },
  limit: {
    alias: 'l',
    default: 25
  }
};

const argv = require('yargs')
  .command('crear', 'Crea un nuevo archivo con la tabla de multiplicar', options)
  .command('listar', 'Imprime en consola tabla de multiplicar', options)
  .help()
  .argv;

module.exports = {
  argv
}