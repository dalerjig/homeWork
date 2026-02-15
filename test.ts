let a: number = 5;

let c = "a";

let d: string[] = ["a", "b", "c"];

function test(a: any): number | string {
  return "";
}

function countCoords(coord: { lat: number; long?: number }): void {}

function printSMTH(id: number | string) {
  // console.log(id.toLoverCase());//error
  if (typeof id === "string") {
    console.log(id.toLowerCase());
  } else {
    console.log(id);
  }
}

function getSum(a: number | number[]) {
  if (Array.isArray(a)) {
    //!!!!!
    return a.reduce((acc, el) => acc + el, 0);
  } else {
    return a;
  }
}

const u: undefined = undefined; //only undefined
const n: null = null; //only null
let v: void = undefined; //undefined or nothing
