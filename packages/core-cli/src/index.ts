#!/usr/bin/env ts-node-script

// import packagejson from '../package.json';
import commander from 'commander';

const program = new commander.Command();
// program.version(packagejson.version);
program
  .option('-d, --debug', 'output extra debugging')
  .option('-s, --small', 'small pizza size')
  .option('-p, --pizza-type <type>', 'flavour of pizza');

program.parse(process.argv);

if (program.debug) {
  console.log(program.opts());
}
console.log('pizza details:');
if (program.small) {
  console.log('- small pizza size');
}
if (program.pizzaType) {
  console.log(`- ${program.pizzaType}`);
}

export default program;
