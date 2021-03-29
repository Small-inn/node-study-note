const { normalize, join, resolve, basename, dirname, extname, parse, format, sep, delimiter, win32, posix } = require('path')
const path = require('path')
/**
 * normalize、join、resolve
 * basename、extname、dirname
 * parse、format
 * sep、delimiter、win32、posix
 * */ 

console.log(normalize('/bin/node/js'))
console.log(normalize('/bin/node/../js'))

console.log(join('bin', 'local', 'node'))
console.log(join('bin', '../local', 'node'))

// ----
console.log(resolve('./'))

// -----
const filePath = '/user/local/bin/no.txt'
console.log(basename(filePath))
console.log(dirname(filePath))
console.log(extname(filePath))
// ------
console.log(parse(filePath))
console.log(format(parse(filePath)))

// ----
console.log('sep:', sep)
console.log('win sep:', win32.sep)
console.log('PATH:', process.env.PATH)
console.log('delimiter:', delimiter)

/**
 * __dirname、__filename总是返回文件的绝对路径
 * process.cwd()总是返回执行node命令所在的文件夹
 * */ 
console.log('__dirname:', __dirname)
console.log('process.cwd():', process.cwd())
console.log('./:', path.resolve('./'))