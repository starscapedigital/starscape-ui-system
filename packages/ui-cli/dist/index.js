#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { program } = require('commander');
const { init } = require('./init');
const { install } = require('./install');
const { list } = require('./list');
program
    .name('starscape-ui')
    .description('Starscape UI component installer')
    .version('1.0.0');
program
    .command('init')
    .description('Initialize project with Starscape tokens and Tailwind preset')
    .action(init);
program
    .command('add [component]')
    .description('Add a component to your project')
    .option('--all', 'Add all available components')
    .action((component, options) => {
    if (options.all) {
        install('', { all: true });
    }
    else if (component) {
        install(component, { all: false });
    }
    else {
        console.error('Please provide a component name or use --all flag');
        process.exit(1);
    }
});
program
    .command('list')
    .description('List all available components')
    .action(list);
program.parse();
