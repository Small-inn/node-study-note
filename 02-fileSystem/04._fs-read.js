const fs  = require('fs')

fs.readFile('./01-_path.js', 'utf8', (err, data) => {
    if (err) {
        throw err
    }
    console.log(data)
})

// 同步操作
const data = fs.readFileSync('./01-_path.js', 'utf8')
console.log(data)