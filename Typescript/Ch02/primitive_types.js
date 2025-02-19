"use strict";
//
// The any type
//
// var item1: any = { id: 1, name: "item1" }
// item1 = { id: 2 };
//
// Explicit casting
//
// var item1 = <any>{ id: 1, name: "item1" }
var item1 = { id: 1, name: "item1" };
item1 = { id: 2 };
//
// The let keyword
//
// var index: number = 0;
let index = 0;
if (index == 0) {
    // var index: number = 2;
    let index = 2;
    console.log(`index = ${index}`);
}
console.log(`index = ${index}`);
//
// const values
//
const constValue = "this should not be changed";
// constValue = "updated";
//
// Union types
//
function printObject(obj) {
    console.log(`obj = ${obj}`);
}
printObject(1);
printObject("string value");
//
// type guards
//
function addWithUnion(arg1, arg2) {
    // return arg1 + arg2;
}
function addWithTypeGuard(arg1, arg2) {
    if (typeof arg1 === "string") {
        // arg 1 is treated as a string
        console.log(`arg1 is of type string`);
        return arg1 + arg2;
    }
    if (typeof arg1 === "number" && typeof arg2 === "number") {
        // both are numbers
        console.log(`arg1 and arg2 are numbers`);
        return arg1 + arg2;
    }
    console.log(`default return treat both as strings`);
    return arg1.toString() + arg2.toString();
}
console.log(` "1", "2" = ${addWithTypeGuard("1", "2")}`);
console.log(`  1 ,  2  = ${addWithTypeGuard(1, 2)}`);
console.log(`  1 , "2" = ${addWithTypeGuard(1, "2")}`);
function addWithTypeAlias(arg1, arg2) {
    return arg1.toString() + arg2.toString();
}
// 
// enums
//
var DoorState;
(function (DoorState) {
    DoorState[DoorState["Open"] = 0] = "Open";
    DoorState[DoorState["Closed"] = 1] = "Closed";
})(DoorState || (DoorState = {}));
function checkDoorState(state) {
    console.log(`enum value is : ${state}`);
    switch (state) {
        case DoorState.Open:
            console.log(`Door is open`);
            break;
        case DoorState.Closed:
            console.log(`Door is closed`);
            break;
    }
}
checkDoorState(DoorState.Open);
checkDoorState(DoorState.Closed);
var DoorStateSpecificValues;
(function (DoorStateSpecificValues) {
    DoorStateSpecificValues[DoorStateSpecificValues["Open"] = 3] = "Open";
    DoorStateSpecificValues[DoorStateSpecificValues["Closed"] = 7] = "Closed";
    DoorStateSpecificValues[DoorStateSpecificValues["Unspecified"] = 256] = "Unspecified";
})(DoorStateSpecificValues || (DoorStateSpecificValues = {}));
//
// string enums
//
var DoorStateString;
(function (DoorStateString) {
    DoorStateString["OPEN"] = "Open";
    DoorStateString["CLOSED"] = "Closed";
})(DoorStateString || (DoorStateString = {}));
console.log(`OPEN = ${DoorStateString.OPEN}`);
console.log(`const Closed = ${10 /* DoorStateConst.Open */}`);
// 
// Undefined
// 
let array = ["123", "456", "789"];
delete array[0];
for (let i = 0; i < array.length; i++) {
    // console.log(`array[${i}] = ${array[i]}`);
    checkAndPrintElement(array[i]);
}
function checkAndPrintElement(arrElement) {
    if (arrElement === undefined)
        console.log(`invalid array element`);
    else
        console.log(`valid array element : ${arrElement}`);
}
//
// Null
//
function printValues(a) {
    console.log(`a = ${a}`);
}
printValues(1);
printValues(null);
//
// conditional expressions
//
const value = 10;
const message = value > 10 ?
    "value is larger than 10" : "value is 10 or less";
console.log(message);
//
// optional chaining : testing for an object property before accessing it
//
let objectA = {
    nestedProperty: {
        name: "nestedPropertyName"
    }
};
// function printNestedObject(obj) {
//     console.log("obj.nestedProperty.name = "
//         + obj.nestedProperty.name);
// }
function printNestedObject(obj) {
    if (obj != undefined
        && obj.nestedProperty != undefined
        && obj.nestedProperty.name) {
        console.log(`name = ${obj.nestedProperty.name}`);
    }
    else {
        console.log(`name not found or undefined`);
    }
}
printNestedObject(null);
printNestedObject(undefined);
printNestedObject({
    aProperty: "another property"
});
printNestedObject({
    nestedProperty: {
        name: "nestedPropertyName"
    }
});
// 
// Optional chaining : using the syntax
//
function printNestedOptionalChain(obj) {
    var _a;
    if ((_a = obj === null || obj === void 0 ? void 0 : obj.nestedProperty) === null || _a === void 0 ? void 0 : _a.name) {
        console.log(`name = ${obj.nestedProperty.name}`);
    }
    else {
        console.log(`name not found or undefined`);
    }
}
printNestedOptionalChain(undefined);
printNestedOptionalChain({
    aProperty: "another property"
});
printNestedOptionalChain({
    nestedProperty: {
        name: null
    }
});
printNestedOptionalChain({
    nestedProperty: {
        name: "nestedPropertyName"
    }
});
// 
// Nullish coalescing
//
function nullishCheck(a) {
    console.log(`a : ${a !== null && a !== void 0 ? a : `undefined or null`}`);
}
nullishCheck(1);
nullishCheck(null);
nullishCheck(undefined);
//
// null operands
//
function testNullOperands(a, b) {
    let addResult = a + (b !== null && b !== void 0 ? b : 0);
}
//
// definite assignment
//
// console.log(`lValue = ${lValue}`);
var lValue = 2;
let globalString;
setGlobalString("this string is set");
console.log(`globalString = ${globalString}`);
// console.log(`globalString = ${globalString!}`);
function setGlobalString(value) {
    globalString = value;
}
// 
// object
//
let structuredObject = {
    name: "myObject",
    properties: {
        id: 1,
        type: "AnObject"
    }
};
function printObjectType(a) {
    console.log(`a: ${JSON.stringify(a)}`);
}
printObjectType(structuredObject);
// printObjectType("this is a string");
// 
// unknown
//
let a = "test";
let aNumber = 2;
aNumber = a;
let u = "an unknown";
u = 1;
let aNumber2;
// aNumber2 = u;
aNumber2 = u;
console.log(`aString : ${a * 2}`);
//
// never
//
function alwaysThrows() {
    throw new Error("this will always throw");
    // return -1;
}
// 
// never in practice
//
var AnEnum;
(function (AnEnum) {
    AnEnum[AnEnum["FIRST"] = 0] = "FIRST";
    AnEnum[AnEnum["SECOND"] = 1] = "SECOND";
})(AnEnum || (AnEnum = {}));
function getEnumValue(enumValue) {
    switch (enumValue) {
        case AnEnum.FIRST: return "First Case";
        case AnEnum.SECOND: return "Second Case";
    }
    let returnValue = enumValue;
    return returnValue;
}
//
// object spread
//
let firstObj = { id: 1, name: "firstObj" };
let secondObj = Object.assign({}, firstObj);
console.log(`secondObj : ${JSON.stringify(secondObj)}`);
let nameObj = { name: "nameObj name" };
let idObj = { id: 1 };
let obj3 = Object.assign(Object.assign({}, nameObj), idObj);
console.log(`obj3 = ${JSON.stringify(obj3)}`);
//
// spread precedence
//
let objPrec1 = { id: 1, name: "obj1 name" };
let objPrec2 = { id: 1001, desc: "obj2 description" };
let objPrec3 = Object.assign(Object.assign({}, objPrec1), objPrec2);
console.log(`objPrec3 : ${JSON.stringify(objPrec3, null, 4)}`);
//
// spread with arrays
//
let firstArray = [1, 2, 3];
let secondArray = [3, 4, 5];
let thirdArray = [...firstArray, ...secondArray];
console.log(`third array = ${thirdArray}`);
let objArray1 = [
    { id: 1, name: "first element" },
];
let objArray2 = [
    { id: 2, name: "second element" }
];
let objArray3 = [
    ...objArray1,
    { id: 3, name: "third element" },
    ...objArray2
];
console.log(`objArray3 = ${JSON.stringify(objArray3, null, 4)}`);
//
// tuples
//
let tuple1;
tuple1 = ["test", true];
// tuple1 = ["test"];
//
// tuple destructuring
//
console.log(`tuple1[0] : ${tuple1[0]}`);
console.log(`tuple1[1] : ${tuple1[1]}`);
// console.log(`tuple1[2] : ${tuple1[2]}`);
let [tupleString, tupleBoolean] = tuple1;
console.log(`tupleString = ${tupleString}`);
console.log(`tupleBoolean = ${tupleBoolean}`);
//
// optional tuple elements
//
let tupleOptional;
tupleOptional = ["test", true];
tupleOptional = ["test"];
console.log(`tupleOptional[0] : ${tupleOptional[0]}`);
console.log(`tupleOptional[1] : ${tupleOptional[1]}`);
//
// tuples and spread syntax
//
let tupleRest;
tupleRest = [1];
tupleRest = [1, "string1"];
tupleRest = [1, "string1", "string2"];
//
// object destructuring
//
let complexObject = {
    aNum: 1,
    bStr: "name",
    cBool: true
};
let { aNum, bStr, cBool } = complexObject;
console.log(`aNum : ${aNum}`);
console.log(`bStr : ${bStr}`);
console.log(`cBool : ${cBool}`);
let { aNum: objId, bStr: objName, cBool: isValid } = complexObject;
console.log(`objId : ${objId}`);
console.log(`objName : ${objName}`);
console.log(`isValid : ${isValid}`);
