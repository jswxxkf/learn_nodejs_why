const http = require('http');
const url = require('url');
const fs = require('fs');
const qs = require('querystring');

const server = http.createServer((req, res) => {
  const {pathname} = url.parse(req.url);
  if (pathname === '/upload') {
    if (req.method === 'POST') {
      req.setEncoding('binary');
      let body = '';
      const totalBoundary = req.headers["content-type"].split(';')[1].replace(' boundary', '');
      const boundary = totalBoundary.split('=')[1];
      req.on('data', chunk => {
        body += chunk;
      });
      req.on('end', () => {
        // 处理body
        // 1. 获取image/png的位置
        const payload = qs.parse(body, '\r\n', ': ');
        const type = payload["Content-Type"];
        const typeIndex = body.indexOf(type);
        const typeLength = type.length;
        // console.log(typeIndex, typeLength);
        // 2. 开始在image/png的位置截取
        let imageData = body.substring(typeIndex + typeLength);
        // 3. 将中间的两个空格去掉
        imageData = imageData.replace(/^\s+/, '');
        // 4. 将最后的boundary去掉
        imageData = imageData.substring(0, imageData.indexOf(`--${boundary}--`));
        fs.writeFile('./foo.png', imageData, 'binary', err => {
          res.end('图片上传成功！');
        });
      });
    }
  }
});

server.listen(8000, () => {
  console.log('文件上传服务器开启成功');
});