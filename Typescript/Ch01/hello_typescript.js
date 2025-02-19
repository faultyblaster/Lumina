"use strict";
//
// Hello typescript
//
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var version = `es6`;
console.log(`hello ${version} TypeScript`);
var myString = `this is a string`;
// myString = 1; // generates TS2322
//
// Basic types
//
var myBoolean = true;
var myNumber = 1234;
var myStringArray = [`first`, `second`, `third`];
// myBoolean = myNumber;
// myStringArray = myNumber;
// myNumber = myStringArray[0];
myBoolean = myNumber === 456;
myStringArray = [myNumber.toString(), "5678"];
myNumber = myStringArray.length;
console.log(`myBoolean = ${myBoolean}`);
console.log(`myStringArray = ${myStringArray}`);
console.log(`myNumber = ${myNumber}`);
//
// Inferred typing
//
var inferredString = "this is a string";
var inferredNumber = 1;
// inferredNumber = inferredString;
//
// Duck typing, assignment
//
var nameIdObject = { name: "myName", id: 1, print() { } };
nameIdObject = { id: 2, name: "anotherName", print() { } };
// nameIdObject = { id: 3, name: "thirdName", print() {} , select() {} };
//
// Duck typing, object assignment
//
var obj1 = { id: 1, print() { } };
var obj2 = { id: 2, print() { }, select() { } };
obj1 = obj2;
// obj2 = obj1;
var other = { id: 2, name: "anotherName", print() { }, select() { } };
nameIdObject = other;
//
// Function signatures and void
//
function calculate(a, b, c) {
    return (a * b) + c;
}
console.log(`calculate() = ${calculate(3, 2, 1)}`);
// console.log(`calculate() = ${calculate("3", "2", "1")}`);
// var returnedValue: string = calculate(3, 2, 1);
//
// Intellisense and JSDoc comments
//
/**
 *
 * Given a string value, log it to the console
 *
 * @param a     The input string.
 */
function printString(a) {
    console.log(a);
}
// var returnedValue: string = printString("this is a string");
//
// Using 3rd Party libraries
//
const inquirer = __importStar(require("inquirer"));
inquirer.prompt([
    {
        name: "first_name",
        message: "what is your name ?"
    }
]).then(answers => {
    console.log(`you answered : ${answers.first_name}`);
});
//# sourceMappingURL=hello_typescript.js.map