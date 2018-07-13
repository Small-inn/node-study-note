const crypto = require('crypto')

function cryptPwd(pass) { 
    const md5 = crypto.createHash('md5')
    return md5.update(pass).digest('hex')
 }

 let pass = '123456'

 console.log(cryptPwd(pass))