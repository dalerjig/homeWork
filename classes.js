"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// if "strictPropertyInitialization": true, x! and y! should be used
var PointClass = /** @class */ (function () {
    function PointClass() {
    }
    return PointClass;
}());
var pointInstance = new PointClass();
pointInstance.x = 10;
pointInstance.y = 20;
// alternative with constructor
var PointClassWithConstructor = /** @class */ (function () {
    function PointClassWithConstructor(x, y) {
        this.w = 0;
        this.x = x;
        this.y = y;
    }
    PointClassWithConstructor.prototype.a = function () {
        // can be accessed in derived classesx}
    };
    PointClassWithConstructor.prototype.b = function () {
        this.a(); // can be accessed here
    };
    return PointClassWithConstructor;
}());
var pointInstanceWithConstructor = new PointClassWithConstructor(10, 20);
var PointD3 = /** @class */ (function (_super) {
    __extends(PointD3, _super);
    function PointD3(x, y, z) {
        var _this = _super.call(this, x, y) || this;
        _this.z = z;
        return _this;
    }
    PointD3.prototype.b = function (smth) {
        // need override because of noImplicitOverride is true
        console.log(smth);
    };
    return PointD3;
}(PointClassWithConstructor));
var point = new PointD3(10, 20, 30);
console.log(point.x, point.y, point.z);
//console.log(point.a); error: a is protected
//point.w = 10; error: w is readonly
//static!
var staticTest = /** @class */ (function () {
    function staticTest() {
    }
    staticTest.d = function () {
        console.log("static method");
    };
    staticTest.c = "ascas";
    return staticTest;
}());
//access static properties and methods without creating an instance! only from original class
var s = staticTest.c;
var m = staticTest.d();
var AbstractClass = /** @class */ (function () {
    function AbstractClass() {
    }
    AbstractClass.prototype.normalMethod = function () {
        console.log("normal method");
    };
    return AbstractClass;
}());
//const a=new AbstractClass(); // error: cannot create an instance of an abstract class//
var test3 = /** @class */ (function (_super) {
    __extends(test3, _super);
    function test3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    test3.prototype.absMethod = function () { }; // need to implement abstract method!!!!!
    return test3;
}(AbstractClass));
var r = new test3();
var D = /** @class */ (function () {
    function D() {
    }
    D.prototype.test = function () { }; // need to implement all properties and methods of the interface and return the correct type
    return D;
}());
