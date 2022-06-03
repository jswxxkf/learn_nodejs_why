const fs = require('fs');

// fs.readFile('../foo.txt', (err, data) => {
//   console.log(data.toString());
// });

const reader = fs.createReadStream('../foo.txt', {
  start: 2,
  end: 5,
  highWaterMark: 1
});

// 数据读取的过程
reader.on('data', chunk => {
  console.log(chunk.toString());
  reader.pause();
  setTimeout(() => {
    reader.resume();
  }, 1000);
});

reader.on('open', () => {
  console.log('文件被打开');
});

reader.on('close', () => {
  console.log('文件被关闭');
});