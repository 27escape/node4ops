#!/usr/bin/env node
 // heloworld taking the person to salute from the command line

// use `esversion: 6`;

// setup accessors to the modules we want to use, these have to be globals
const figlet = require("figlet");
const chalk = require("chalk");

// -----------------------------------------------------------------------------
// this is the modern way of constructing a function, yuk!

const helo = (who) => {
    if (!who) {
        who = 'world';
    }
    console.log(
        chalk.red(
            figlet.textSync('Hello ' + who, {
                font: "Standard",
                horizontalLayout: "default",
                verticalLayout: "default"
            })
        )
    );
};


// -----------------------------------------------------------------------------
// everything is async/wait nowadays

const run = async() => {
    // for the process.argv array
    // 0 is the full path to the node version
    // 1 is the full path to this script
    // 2 is the start of the args passed to the script

    const who = process.argv[2];
    helo(who);
};

// and run the 'main' program
run();