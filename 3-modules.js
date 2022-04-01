// * CommonJS, every file is a module by default in node
// * Modules - Encapsulated Code (only share minimum)

const {john,peter} = require('./4-first-module')
const sayHi = require('./5-second-module')
const data = require('./6-alternative-flavour-module')
require('./7.mind-grenade')
console.table(data)

sayHi('susan')
sayHi(john)
sayHi(peter)