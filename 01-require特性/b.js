module.exports.test = 'B'

const A = require('./a.js')
console.log(A.test)

module.exports.test = 'BB'