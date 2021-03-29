const fs = require('fs')
const { promisify } = require('util')
const read = promisify(fs.readFile)

// read('./06-_promisify.js').then(data => {
//     console.log(data)
// }).catch(err => {
//     console.log(err)
// })

async function test() {
    try {
        const data = await read('./06-_promisify.js')
        console.log(data)
    } catch(err) {
        console.log(err)
    }
}
test()