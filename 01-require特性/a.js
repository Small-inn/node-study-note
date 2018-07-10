module.exports.test = 'A'

const B = require('./b.js')
console.log(B.test)

module.exports.test = 'AA'