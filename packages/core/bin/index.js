#!/usr/bin/env node
console.log(process.argv.slice(2))

// const importLocal = require('import-local');
// if (importLocal(__filename)) {
//   require('npmlog').info('cli', '正在使用 imooc-cli 本地版本');
// } else {
//   require('../lib')(process.argv.slice(2));
// }