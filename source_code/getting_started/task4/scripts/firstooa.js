 // #!/usr/bin/env node
 // try out our first module as a proper module

 const ooa = require('../lib/ooa.js')

 const welcome = new ooa.Helo("hi");


 // and output a name
 console.log(welcome.helo('fred'));