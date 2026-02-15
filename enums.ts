enum Direction {
  UP, //0
  DOWN, //1
  LEFT, //2
  RIGHT, //3
}
enum custDirection {
  UP = 1, //1
  DOWN, //2
  LEFT, //3
  RIGHT, //4
}

enum stringEnum {
  UP = "UP",
  DOWN = "DOWN",
  LEFT = "LEFT",
  RIGHT = "RIGHT",
}

//Гетерогенные Enum
enum decision {
  yes = 1,
  NO = "no",
  maybe = dec(), //only number
}

function dec() {
  return 2;
}

enum Testt {
  A,
}

let testEnum = Testt.A;
let namet = Testt[Testt.A]; //A

const enum constEnum {
  A,
  B,
}

let cs = constEnum.A;

enum DICE {
  one = 1,
  two,
  three,
  four,
}

function returnDice(dice: DICE) {
  switch (dice) {
    case DICE.one:
      return "один";
    case DICE.two:
      return "два";
    case DICE.three:
      return "три";
    default:
      let a: never = dice;
    // to check if smth added to enum
  }
}
