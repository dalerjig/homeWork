"use strict";
var a = 5;
var c = "a";
var d = ["a", "b", "c"];
function test(a) {
    return "";
}
function countCoords(coord) { }
function printSMTH(id) {
    // console.log(id.toLoverCase());//error
    if (typeof id === "string") {
        console.log(id.toLowerCase());
    }
    else {
        console.log(id);
    }
}
function getSum(a) {
    if (Array.isArray(a)) {
        //!!!!!
        return a.reduce(function (acc, el) { return acc + el; }, 0);
    }
    else {
        return a;
    }
}
var u = undefined; //only undefined
var n = null; //only null
var v = undefined; //undefined or nothing
