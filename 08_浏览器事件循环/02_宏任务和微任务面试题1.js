setTimeout(() => {
  console.log('set1');
  new Promise(resolve => {
    resolve();  // pending => fulfilled triggers then()
  }).then(() => {
    new Promise(resolve => {
      resolve()
    }).then(() => {
      console.log('then4')
    });
    console.log('then2')
  });
});

new Promise(resolve => {
  console.log('pr1');
  resolve()
}).then(() => {
  console.log('then1')
});

setTimeout(() => {
  console.log('set2');
});

console.log(2);

queueMicrotask(() => {
  console.log('queueMicroTask executed');
});

new Promise(resolve => {
  resolve()
}).then(() => {
  console.log('then3');
});

/**
 * 执行顺序：
 *
 * pr1
 * 2 (script执行过程[同步代码区]执行完毕，开始轮询微任务队列)
 * then1
 * queueMicroTask executed
 * then3 (微任务队列执行完毕，开始执行宏任务队列队首任务)
 * set1 (宏任务队列队首任务执行完毕，轮询微任务队列)
 * then2
 * then4 (微任务队列执行完毕，开始执行宏任务队列队首任务)
 * set2
 *
 * */