#!usr/bin/env node

// -----------------------------------------------------------------------------
// name:    nscaf
// purpose: Scaffold a new node script from a boilerplate
// author:  Kevin Mulholland
// email:   kevin.
// licence: MIT
// version: 0.0.1
// -----------------------------------------------------------------------------

const TEMPLATE_LOC = 'https://github.com/27escape/';
const TEMPLATE_WEB = process.env.HOME + '/.node_boilerplate.js';

// -----------------------------------------------------------------------------

// do we still need to use this
'use strict';
'use esversion: 6';

// -----------------------------------------------------------------------------
// get the library modules brought in
// npm install -g commander shelljs chalk 

// use this process command commandline arguments
const program = require("commander");
const chalk = require("chalk");
const shell = require("shelljs");

// -----------------------------------------------------------------------------
function read_npm_defaults() {

}

// -----------------------------------------------------------------------------
// get the users take on the defaults, pass in the npm defaults
function request_user_defaults(defaults) {

}

// -----------------------------------------------------------------------------
// fetch the web template if, our local version is more than one week old
// or the force has been given to us
// if fetched then this will stored into the local filepath
function fetch_template(web, local, force) {

}

// -----------------------------------------------------------------------------
// read in the local template 
function read_template(local) {

}

// -----------------------------------------------------------------------------
// fetch the boilerplate if, our local version is more than one week old
// or the force has been given to us
// if fetched then this will stored into the local filepath
function store_boilerplate(content, local) {}




// -----------------------------------------------------------------------------
// the main part of the program
program
    .version('0.0.1', '--version')
    .description('nscaf: Scaffold a new node script from a boilerplate')
    // .usage("shorter purpose description")
    .option("-v, --verbose", "Verbose flag for debugging")
    .option('-f --fetch', 'Force fetch the template from ' + TEMPLATE_WEB)
    .option('--no-fetch', 'Never fetch the template, use the local copy in ' + TEMPLATE_LOC)
    .parse(process.argv);