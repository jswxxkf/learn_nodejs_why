let name = {name: 'why'};
let age = 18;
const sayHello = function (name) {
  console.log('你好' + name);
};

export {
  name,
  age,
  sayHello
};

setTimeout(() => {
  name.name = 'lidan';
  age = 20;
}, 1000);

setTimeout(() => {
  console.log(name.name);
}, 4000);