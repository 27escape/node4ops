// module to prepend helo onto a passed in string

module.exports = (who) => {
    if (!who) {
        who = 'world';
    }

    return 'hello ' + who;
}