import {name, age, sayHello} from "./modules/foo.js";

setTimeout(() => {
  console.log(name.name)
  console.log(age)
}, 2000);

setTimeout(() => {
  name.name = 'guJiaQing';
  // age = 21;  // 试图给一个常量赋值（核心 - 模块环境记录中的常量）
},3000)