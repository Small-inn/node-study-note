/**
 * Buffer用于处理二进制数据流
 * 实例类似整数数组，大小固定
 * C++代码在V8堆外分配物理内存
 * */ 
console.log(Buffer.alloc(10))
console.log(Buffer.alloc(20))
console.log(Buffer.alloc(10, 1))
console.log(Buffer.allocUnsafe(10, 1))

console.log(Buffer.from([1, 2, 3]))
console.log(Buffer.from('test'))

// byteLength、isBuffer、concat
console.log(Buffer.byteLength('test'))
console.log(Buffer.byteLength('测试'))
console.log(Buffer.isBuffer({}))
console.log(Buffer.isBuffer(Buffer.from('123')))
console.log(Buffer.concat([Buffer.from('This is a test!')]))

// length、allocUnsafe、toString、fill、equals、indexOf、copy
console.log(Buffer.from('This is a test!').length)
console.log(Buffer.alloc(10).length)
console.log(Buffer.from('This is a test!').toString('base64'))
console.log(Buffer.alloc(10).fill(10, 2, 7))

const buf1 = Buffer.from('test')
const buf2 = Buffer.from('test')
const buf3 = Buffer.from('test!')
console.log(buf1.equals(buf2))
console.log(buf1.equals(buf3))
