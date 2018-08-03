// we are using the module relative, as we should only stall/link it when it passes tests
const firstmod = require('../lib/firstmod.js');

test(' no params, gives world', () => {
    expect(firstmod.helo()).toMatch('world');
});

test(' fred, gives fred', () => {
    expect(firstmod.helo('fred')).toMatch('fred');
});