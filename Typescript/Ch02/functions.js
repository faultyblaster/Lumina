"use strict";
//
// optional parameters
//
function concatValues(a, b) {
    console.log(`a + b = ${a + b}`);
}
concatValues("first", "second");
concatValues("third");
//
// default parameters
//
function concatWithDefault(a, b = "default") {
    console.log(`a + b = ${a + b}`);
}
concatWithDefault("first", "second");
concatWithDefault("third");
//
// rest parameters
//
function testArguments(...args) {
    for (let i in args) {
        console.log(`args[${i}] = ${args[i]}`);
    }
}
testArguments("1");
testArguments(10, 20);
function myCallback(text) {
    console.log(`myCallback called with ${text}`);
}
function withCallbackArg(message, callbackFn) {
    console.log(`withCallback called, message : ${message}`);
    callbackFn(`${message} from withCallback"`);
}
withCallbackArg("initial text", myCallback);
function add(a, b) {
    return a + b;
}
add("first", "second");
add(1, 2);
function withLiteral(input) {
    console.log(`called with : ${input}`);
}
withLiteral("one");
withLiteral("two");
withLiteral("three");
withLiteral(65535);
// withLiteral("four");
// withLiteral(2);
