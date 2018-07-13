/**
 * Buffer：用于处理二进制流
 * 实例类似整数数组，大小固定
 * c++ 代码在v8堆外
 * 
 * */

console.log(Buffer.alloc(10))
console.log(Buffer.alloc(20))
console.log(Buffer.alloc(10, 20))
console.log(Buffer.from([1, 2, 3]))
console.log(Buffer.byteLength('你好'))