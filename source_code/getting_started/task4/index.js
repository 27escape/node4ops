#!/usr/bin/env node

'use strict';

function sleep(milliseconds) {
    var start = new Date().getTime();
    console.warn('Using busy wait sleep, bad idea!');
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds) {
            break;
        }
    }
}

// currently fruit items are globally taxed at 20%
const FRUIT_ITEM_TAX = 20 / 100;

/**
 *  Fruit
 *
 *  Class provides information about items of fruit
 *
 *  @param {string} type
 *          This is the type of fruit, such as 'apple'
 *  @param {string} color
 *          This is the color of this type of fruit, such as 'green'
 *  @param {float} price
 *          This is the price for a single piece of fruit, such as 0.3
 */
class Fruit {
    // when constructor arguments are missing, set suitable defaults
    constructor(type, color, price) {
            this.type = type || 'unknown fruit';
            this.color = color || 'unknown color';
            this.price = price || 1.0;
        }
        // provide information about the fruit item in a nice human readable format
    describe() {
            return 'This ' + this.type + " is " + this.color + ', it costs ' + this.price;
        }
        // We know that a shopping basket will contain an array of fruits and we will
        // want to provide tabular information about all of them, provide that data as
        // a comma separated string
    describeCSV() {
            return this.type + "," + this.color + ',' + this.price;
        }
        // use the global FRUIT_ITEM_TAX value to calculate a new price, which the purchaser has to pay
        // vegetables have a different rate
    priceWithTax() {
        // purchase tax is additive
        return this.price + (this.price * FRUIT_ITEM_TAX);
    }
}

const tomato = new Fruit('tomato', 'red', 0.1);
const apple = new Fruit('apple', 'golden', 0.5);

// and now we have some fruit
console.log(tomato.describe());
console.log(apple.describe());

// we are not 
const pear = new Fruit('pear');
console.log(pear.describe());

debugger; // this will cause a breakpoint when used under a debugger

console.time('sleep 1s');
sleep(1000);
console.timeEnd('sleep 1s');

var my_array = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.table(my_array);

console.log(typeof tomato);