const message = 'nodejs李银河';
// deprecated!
// const buffer = new Buffer(message)
const buffer = Buffer.from(message, 'utf-8')
console.log(buffer)
// decode 编解码时指定的字符集必须相同！
console.log(buffer.toString('utf-8'))