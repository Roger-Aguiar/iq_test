"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var iq_test_1 = require("./src/iq.test");
var positionEvenness = (0, iq_test_1.iqTest)("2 4 7 8 10");
console.log("Position of evenness number: " + positionEvenness);
/*import readline = require('readline');

let userInput = readline.createInterface({input: process.stdin, output: process.stdout});

userInput.question("Please, enter an integer number: ",
function(answer)
{
    let integerNumber = new SumOfDigits(answer);
    let digitalRootSum = integerNumber.digitalRoot();
    console.log(`The digital root sum is: ${digitalRootSum}`);
});*/ 
//# sourceMappingURL=index.js.map