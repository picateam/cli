#!/usr/bin/env node
const program = require('commander')
const packgeJson = require('../package.json')

// show version
program
    .version(packgeJson.version)

// init 模板
program
    .command('init')
    .description('初始化模板')
    .action(function () {
        console.log('init')
    })

// 开发环境
program
    .command('dev')
    .description('开发环境启动服务')
    .action(function () {
        console.log('init')
    })

// 生产环境
program
    .command('dist')
    .description('生产环境编译')
    .action(function () {
        console.log('init')
    })

program.parse(process.argv)