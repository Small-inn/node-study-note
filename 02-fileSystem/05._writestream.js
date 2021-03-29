const fs = require('fs')

const ws = fs.createWriteStream('./text1.txt')

const tid = setInterval(() => {
    const num = parseInt(Math.random() * 10)
    if (num < 8) {
        // 这里要注意的是写数据的要是Buffer对象、String
        ws.write(num + '')
    } else {
        clearInterval(tid)
        ws.end()
    }
}, 500)

ws.on('finish', (err) => {
    if (err) console.log(err)
    console.log('done')
})