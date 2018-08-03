// module to prepend helo onto a passed in string

module.exports = {

    helo: (who) => {
        if (!who) {
            who = 'world';
        }
        return 'hello ' + who;
    }
};


// module.exports.helo = (who) => {
//     if (!who) {
//         who = 'world';
//     }
//     return 'hello ' + who;
// }