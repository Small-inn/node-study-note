
/**
 * 异步编程-callback
 * 回调函数格式规范
 * error-first callback
 * node-style callback
 * 第一个参数是error, 后面的参数才是结果
 * 
*/

interview((res) => {
  if (res instanceof Error) {
    return console.log('cry fail')
  }
  console.log(res)
})

function interview(cb) {
  setTimeout(() => {
    if (Math.random() < 0.1) {
      cb('success')
    } else {
      // throw new Error('error')
      cb(new Error('fail'))
    }
  }, 300)
}