const greet = require('./greet');
const chalk = require('chalk');


const styledMessage = chalk.bgGreen.black(greet('Xola'));
console.log(styledMessage);
console.log(greet('Xola'));