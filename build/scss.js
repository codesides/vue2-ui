"use strict";
const pack = require("../package.json");
// 打包的静态文件的写法
const bannerTxt = `/*! 版本号为 v${pack.version} */\n`;

process.stdout.write(bannerTxt);
process.stdin.pipe(process.stdout);
