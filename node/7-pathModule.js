const path = require('path')

console.log(path.sep)

const filePath = path.join('/content', 'subFloder', 'test.txt')
console.log('   ')
console.log(filePath)
console.log('   ')

const base = path.basename(filePath)
console.log(base)
console.log('   ')

const absolute = path.resolve(__dirname, 'content', 'subFolder', 'test.txt')
console.log(absolute)
console.log('   ')