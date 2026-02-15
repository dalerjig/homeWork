"use strict";
function logTime(num) {
    console.log(Date.now());
    return num;
}
function logTime2(num) {
    console.log(Date.now());
    return num;
}
function genericLogTime(num) {
    console.log(Date.now());
    return num;
}
//!!!!!!!!
genericLogTime(1);
genericLogTime("1");
var MyGenClass = /** @class */ (function () {
    function MyGenClass() {
    }
    return MyGenClass;
}());
var aC = new MyGenClass();
aC.value;
function logTimeStamp(num) {
    console.log(num.stamp);
    return num;
}
