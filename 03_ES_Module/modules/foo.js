const name = 'why';
const age = 18;
const sayHello = function (name) {
  console.log('你好' + name);
};

// 法1：直接导出
// export const name = 'why';
// export const age = 18;
// export function sayHello(name) {
//   console.log('你好' + name);
// }

// 法2：下方的{}不是一个对象
export {
  name,
  age,
  sayHello
};

// 法3：{}导出时，可以给变量起别名alias
// export {
//   name as fName,
//   age as fAge,
//   sayHello as fSayHello
// }

// 导出default 默认的导出只能有一个
export default function () {
  console.log('对某个东西进行格式化');
}