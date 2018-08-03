#!/usr/bin/env node
// try out our first module

const firstmod = require("../lib/firstmod.js");

// and output a name
console.log(firstmod.helo("fred"));
