const fs  = require('fs')

// 1.0
// fs.writeFile('./text.txt', 'just a joker!', 'utf8', err => {
//     if (err) throw err
//     console.log('done!')
// })

const content = Buffer.from('just a joker2!')

fs.writeFile('./text.txt', content, err => {
    if (err) throw err
    console.log('done!')
})