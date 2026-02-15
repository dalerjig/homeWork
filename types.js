"use strict";
var point2d = { x: 1, y: 2 };
var point3d = { x: 1, y: 2, z: 3 };
var point2D = { x: 1, y: 2 };
var point3D = { x: 1, y: 2, z: 3 };
var testObj = { a: 5, b: "hello" }; //merged interfaces. Not possible with type aliases
var f = function (point) {
    //const d :IPoint3D=point//error
    var d = point; //type assertion
    return d;
};
//literal types
var t = "test";
function moving(action) {
    switch (action) {
        case "up":
            console.log("moving up");
            return 1;
        case "down":
            console.log("moving down");
            return -1;
    }
}
