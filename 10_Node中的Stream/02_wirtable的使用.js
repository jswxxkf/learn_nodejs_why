const fs = require('fs');

// // 传统的写入方式
// fs.writeFile('./bar.txt', 'hello stream', err => {
//   console.log(err);
// });

// stream的写入方式
const writer = fs.createWriteStream('./bar.txt', {
  // flags: 'a',
  flags: 'r+',
  start: 4
});

writer.write('李丹胸好小', error => {
  if (error) {
    console.log(error);
    return
  }
  console.log('写入成功');
});

writer.write('石怀钰好清纯', error => {
  if (error) {
    console.log(error);
    return
  }
  console.log('第二次写入成功');
});

writer.end('顾佳清也是');

writer.on('close', () => {
  console.log('文件被关闭');
});