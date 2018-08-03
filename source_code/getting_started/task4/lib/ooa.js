// quick class example

class Helo {

    constructor(prefix) {
        this.prefix = prefix
    }


    helo(who) {
        if (!who) {
            who = 'world';
        }
        return this.prefix + ' ' + world;
    }
};