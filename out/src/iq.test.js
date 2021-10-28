"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.iqTest = void 0;
function iqTest(numbers) {
    var evenness = numbers.split(' ');
    var odd = [];
    var even = [];
    for (var index = 0; index < evenness.length; index++) {
        if (Number(evenness[index]) % 2 != 0)
            odd.push(Number(evenness[index]));
        else
            even.push(Number(evenness[index]));
    }
    console.log("Odd numbers: " + odd.length);
    console.log("Even numbers: " + even.length);
    return odd.length == 1 ? getPositionOfEvenness(odd[0], evenness) : getPositionOfEvenness(even[0], evenness);
}
exports.iqTest = iqTest;
function convertToIntegerArray(evenness) {
    var array = [];
    for (var index = 0; index < evenness.length; index++) {
        array.push(Number(evenness[index]));
    }
    return array;
}
function getPositionOfEvenness(numberEvenness, evenness) {
    var positionEvenness = 0;
    for (var index = 0; index < evenness.length; index++) {
        if (numberEvenness == Number(evenness[index])) {
            positionEvenness = index + 1;
            break;
        }
    }
    return positionEvenness;
}
//# sourceMappingURL=iq.test.js.map