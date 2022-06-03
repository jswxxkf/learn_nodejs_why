// 常见的导入方式[named exports]
// 法1. 普通的导入方式
// import {name, age, sayHello} from "./modules/foo.js";

// 法2. 导出变量之后可以起别名alias
// import {name as wName, age as wAge, sayHello as wSayHello} from './modules/foo.js';

// 法3. *全部导入，并起别名alias
// import * as foo from './modules/foo.js';

// 从bar.js中导入
import {name, age, sayHello} from './modules/bar.js'

// 导入default
import format from './modules/foo.js';
format();