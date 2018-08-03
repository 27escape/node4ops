#!usr/bin/env node
 // this is overly verbose to help things along

// -----------------------------------------------------------------------------
// name:    %SCRIPT-NAME%
// purpose: %SCRIPT-PURPOSE%
// author:  %AUTHOR-NAME% 
// email:   %AUTHOR-EMAIL%
// licence: %LICENSE%
// version: %VERSION%
// -----------------------------------------------------------------------------


// make sure we are checking for basic coding errors
'use strict';
'use esversion: 6';

// -----------------------------------------------------------------------------
// get the library modules brought in
// npm install -g commander shelljs chalk 

// use this process command commandline arguments
const program = require("commander");

// comment in/out whichever of these you want to use
// may not want colored output
const chalk = require("chalk");
// probably want to use shortcuts
const shell = require("shelljs");


function Verbose(init_value) {
    var _is_verbose = init_value || 0;
    this.set = function (value) {
        _is_verbose = value || 0;

    };
    this.msg = function (text) {
        if (_is_verbose) {
            console.error(chalk.yellow(text));
        }
    };
}


//-----------------------------------------------------------------------------
// show how to validate command line arguments
// returns the value 
function _validate_size(pizzasize, default_value) {
    // pizzasize = pizzasize || 'medium';
    var size = /^(large|medium|small)$/i;
    if (!size.test(pizzasize)) {
        console.error("its a trap invalid size " + pizzasize + ', using the default of ' + default_value);
        pizzasize = default_value;
    }

    return pizzasize.toLowerCase();
}

//-----------------------------------------------------------------------------
// get the passed arguments, help provided by default


program
    .version('%VERSION%', '--version')
    .description('%SCRIPT-NAME%: %SCRIPT-PURPOSE%')
    // .usage("shorter purpose description")
    .option("-v, --verbose", "Verbose flag for debugging")
    .option('-i, --integer <n>', 'An integer argument', parseInt)
    .option('-f, --float <n>', 'An integer argument', parseFloat)
    .option('-o, --optional [value]', 'An optional value')
    .option("--string", "string input, no default")
    .option("--default <value>", "defaultstring input", 'some default')
    // regexp with a default, if match is not made you will get the default value
    // <size> is REQUIRED
    // .option('-s --size <size>', 'Pizza size', /^(large|medium|small)$/i, 'medium')
    .option('-s --size <size>', 'Pizza size - small, *medium* or large', _validate_size, 'medium')
    // regexp on its own
    // [drink] is optional
    .option('-d --drink [drink]', 'Drink', /^(coke|pepsi|izze)$/i)
    // note that this does not remove things from process.argv
    .parse(process.argv);

// show how we can exit with the real help, not the basic program.help() version
if (!program.args || !program.args.length) program.usage();

// console.log(' size: %j', program.size);
// console.log(' drink: %j', program.drink);
// console.log(' default: %j', program.default);
// console.log(' optional: %j', program.optional);
// console.log(' string: %j', program.string);
// console.log(' integer: %j', program.integer);
// console.log(' float: %j', program.float);

// console.log('any other things left on the command line ...');
// this is an array of items
// console.log(program.args);

// do something with the verbose flag
const verbose = new Verbose(program.verbose);
verbose.msg("Verbose mode is switched on");

console.log(chalk.green("Things going well so far"));
// no need for verbose now
verbose.set(0);
verbose.msg("Verbose mode is switched off, should not be displayed");

// lets do some shell things
// shell.cd("/tmp");
// const newdir = "newdir." + process.pid;
// shell.mkdir(newdir);
// view all the mardownfiles
// const md = shell.cat("somefiles*.md")
// copy some files
// shell.cp("/tmp/*md", newdir);