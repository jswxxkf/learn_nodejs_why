const path = require('path');
const resolve = dir => path.resolve(__dirname, dir);
const EventEmitter = require('events');
// 定义事件总线
const bus = new EventEmitter();

// 1. 同步操作文件
const fs = require('fs');
const res = fs.statSync('../foo.txt');
console.log(res);
console.log('后续代码执行')

// // 2. 异步回调操作文件
// fs.stat('../foo.txt', (err, state) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log(state);
// });
// console.log('后续代码执行');
//
// // 3. promise操作文件 ***
// fs.promises.stat("../foo.txt").then(state => {
//   console.log(state);
// }).catch(err => {
//   console.log(err);
// });
// console.log('后续代码执行');
//
// // 4. 文件的读写
// fs.writeFile('../foo.txt', '123', {encoding: 'utf-8'}, err => console.log(err));
//
// // 5. 新建一个文件夹
// if (!fs.existsSync('demo')) {
//   fs.promises.mkdir('demo').catch(err => console.log(err));
// }
//
// // 6. 获取文件夹的内容
// // 注意类似于 python中的 for root_path, dir_names, file_names in os.walk(os.getcwd())
// function readFolderContent(folder) {
//   fs.readdir(folder, {withFileTypes: true}, (err, files) => {
//     files.forEach(file => {
//       if (file.isDirectory()) {
//         const newFolder = path.resolve(folder, file.name);
//         readFolderContent(newFolder);
//       } else {
//         console.log(file.name);
//       }
//     });
//   });
// }
//
// // 7. 文件重命名
// fs.promises.rename('../why', '../coder').catch(err => console.log(err));
//
// // -------------------------------
// // 1. 监听事件
// function clickHandlerA(args) {
//   console.log('A监听到click事件', args);
// }
//
// function clickHandlerB(args) {
//   console.log('B监听到click事件', args);
// }
//
// bus.on('click', clickHandlerA);
// bus.on('click', clickHandlerB);
// // 把监听事件放到最前面
// bus.prependListener('click', args => {
//   console.log('C监听到click事件')
// });
// // 把监听事件放到最前面，且(C)仅监听此一次
// bus.prependOnceListener('click', args => {
//   console.log('C监听到click事件')
// });
//
// setTimeout(() => {
//   bus.emit('click', 'coderwhy');
//   // bus.off('click', clickHandlerA);
//   bus.emit('click', 'kobe');
// }, 2000);
//
// // 移除所有(指定)的监听器
// bus.removeAllListeners('click');
//
// console.log(bus.getMaxListeners());
// console.log(bus.eventNames());
// console.log(bus.listenerCount('click'));
// console.log(bus.listeners('click'));
//
// setTimeout(() => {
//   console.log('setTimeout')
// }, 0);
// setImmediate(() => {
//   console.log('set Immediate');
// });
// process.nextTick(() => {
//   console.log('process.nextTick');
// });