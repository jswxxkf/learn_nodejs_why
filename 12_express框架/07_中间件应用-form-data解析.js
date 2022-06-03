const path = require('path');

const express = require('express');
const multer = require('multer');

const app = express();

// 添加两个中间件，获取对应请求体中的数据
// 解析获取json
app.use(express.json());
// 解析获取x-www-form-urlencoded(extended为true: 第三方扩展解析; 为false:Node原生querystring解析)
app.use(express.urlencoded({extended: true}));
// 解析获取form-data(除了上传文件外的任何其它)
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // cb(error, destination)
    cb(null, './uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});
const upload = multer({storage: storage});

app.post('/upload', upload.single('file'), (req, res, next) => {
  console.log(req.file);
  res.end('文件上传成功');
});

app.post('/login', upload.any(), (req, res, next) => {
  console.log(req.body);
  res.end('用户登录成功~');
});

app.listen(8000, () => {
  console.log('form-data服务器启动成功');
});