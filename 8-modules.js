const names = require('./1-name')
const sayHi = require('./2-utils')
const data = require('./4-alter')
require('./5-mind')

sayHi(names.ali)
sayHi(names.arif)
sayHi(names.momina)
sayHi("Rehman")
sayHi("Momina")

console.log(names)
console.log(data)