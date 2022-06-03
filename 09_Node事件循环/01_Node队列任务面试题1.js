async function async1() {
  console.log('async1 start');
  await async2()
  console.log('async1 end');
}

async function async2() {
  console.log('async2');
}

console.log('script start');

setTimeout(() => {
  console.log('set timeout 0');
}, 0);

setTimeout(() => {
  console.log('set timeout 2');
}, 300);

setImmediate(() => {
  console.log('set immediate');
});

process.nextTick(() => {
  console.log('next tick 1');
});

async1();

process.nextTick(() => {
  console.log('next tick 2');
});

new Promise(resolve => {
  console.log('promise1');
  resolve()
  console.log('promise2');
}).then(() => {
  console.log('promise3');
});

console.log('script end');

/**
 * 执行顺序：
 script start
 async1 start
 async2
 promise1
 promise2
 script end
 next tick 1
 next tick 2
 async1 end
 promise3
 set timeout 0
 set immediate
 set timeout 2
 * */