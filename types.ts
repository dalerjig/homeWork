type Point = { x: number; y: number };
type Point3D = Point & { z: number };

const point2d: Point = { x: 1, y: 2 };
const point3d: Point3D = { x: 1, y: 2, z: 3 };

type stringOrNumber = string | number;

interface IPoint {
  x: number;
  y: number;
}
interface IPoint3D extends IPoint {
  z: number;
}

const point2D: IPoint = { x: 1, y: 2 };
const point3D: IPoint3D = { x: 1, y: 2, z: 3 };

interface Test {
  a: number;
}
interface Test {
  b: string;
}
const testObj: Test = { a: 5, b: "hello" }; //merged interfaces. Not possible with type aliases

const f = (point: IPoint) => {
  //const d :IPoint3D=point//error
  const d: IPoint3D = point as IPoint3D; //type assertion
  return d;
};

//for test.json
interface Info {
  desc: string;
  isActive: boolean;
}
interface Tags {
  name: string;
  value: number;
}
interface IUser {
  userId: number;
  id: number;
  title: string;

  info: Info;

  tags: Tags[];
}

//literal types
const t: "test" = "test";
type b = "up" | "down";

function moving(action: b): 1 | -1 {
  switch (action) {
    case "up":
      console.log("moving up");
      return 1;
    case "down":
      console.log("moving down");
      return -1;
  }
}
