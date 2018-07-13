const {normalize} = require('path')
const {join} = require('path')
const {resolve} = require('path')

console.log(normalize('/dsa/da/df/ad'))
console.log(join('/dsa/da/df/ad','afs','da'))
console.log(resolve('./'))

const {basename, dirname, extname} = require('path')
const {parse, format} = require('path')

const filePath = '/user/add/text.js'
console.log(basename(filePath))
console.log(dirname(filePath))
console.log(extname(filePath))
console.log(parse(filePath))
console.log(format(parse(filePath)))

/**
 * path:
 * _dirname、_filename总是返回文件绝对路径
 * process.pwd()总是返回执行node的命令所在文件夹
 * */ 
