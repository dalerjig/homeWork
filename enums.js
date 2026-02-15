"use strict";
var Direction;
(function (Direction) {
    Direction[Direction["UP"] = 0] = "UP";
    Direction[Direction["DOWN"] = 1] = "DOWN";
    Direction[Direction["LEFT"] = 2] = "LEFT";
    Direction[Direction["RIGHT"] = 3] = "RIGHT";
})(Direction || (Direction = {}));
var custDirection;
(function (custDirection) {
    custDirection[custDirection["UP"] = 1] = "UP";
    custDirection[custDirection["DOWN"] = 2] = "DOWN";
    custDirection[custDirection["LEFT"] = 3] = "LEFT";
    custDirection[custDirection["RIGHT"] = 4] = "RIGHT";
})(custDirection || (custDirection = {}));
var stringEnum;
(function (stringEnum) {
    stringEnum["UP"] = "UP";
    stringEnum["DOWN"] = "DOWN";
    stringEnum["LEFT"] = "LEFT";
    stringEnum["RIGHT"] = "RIGHT";
})(stringEnum || (stringEnum = {}));
//Гетерогенные Enum
var decision;
(function (decision) {
    decision[decision["yes"] = 1] = "yes";
    decision["NO"] = "no";
    decision[decision["maybe"] = dec()] = "maybe";
})(decision || (decision = {}));
function dec() {
    return 2;
}
var Testt;
(function (Testt) {
    Testt[Testt["A"] = 0] = "A";
})(Testt || (Testt = {}));
var testEnum = Testt.A;
var namet = Testt[Testt.A]; //A
var constEnum;
(function (constEnum) {
    constEnum[constEnum["A"] = 0] = "A";
    constEnum[constEnum["B"] = 1] = "B";
})(constEnum || (constEnum = {}));
var cs = constEnum.A;
var DICE;
(function (DICE) {
    DICE[DICE["one"] = 1] = "one";
    DICE[DICE["two"] = 2] = "two";
    DICE[DICE["three"] = 3] = "three";
    DICE[DICE["four"] = 4] = "four";
})(DICE || (DICE = {}));
function returnDice(dice) {
    switch (dice) {
        case DICE.one:
            return "один";
        case DICE.two:
            return "два";
        case DICE.three:
            return "три";
        default:
            var a_1 = dice;
        // to check if smth added to enum
    }
}
