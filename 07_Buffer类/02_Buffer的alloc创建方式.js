const buffer = Buffer.alloc(8)
console.log(buffer)
buffer[0] = 88; // 默认转为十六进制
buffer[1] = 0x55;
console.log(buffer)