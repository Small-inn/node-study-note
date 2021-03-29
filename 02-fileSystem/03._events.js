const EventEmitter = require('events')
class myEvent extends EventEmitter {}

const my = new myEvent()

// 1.0 on emit
// my.on('test', () => {
//     console.log('just a test!')
// })
// setInterval(() => {
//     my.emit('test')
// }, 500)

// 2.0 error
// my.on('error', (err) => {
//     console.log(err)
// })

// my.emit('error', new Error('node'))

// 3.0 once 
// my.once('test', () => {
//     console.log('hahhah')
// })
// setInterval(() => {
//     my.emit('test')
// }, 500)

// 4.0 removeListener
function fn1 () {
    console.log('11')
}
function fn2 () {
    console.log('22')
}
// my.on('test', fn1)
// my.on('test', fn2)
// my.emit('test')

// my.removeListener('test', fn1)
// my.emit('test')

my.removeAllListeners('test')
my.emit()