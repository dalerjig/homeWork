// if "strictPropertyInitialization": true, x! and y! should be used
class PointClass {
  x: number;
  y: number;
}

const pointInstance = new PointClass();

pointInstance.x = 10;
pointInstance.y = 20;

// alternative with constructor
class PointClassWithConstructor {
  x: number;
  y: number;
  private p: number; //cant be accessed outside the class
  readonly w: number = 0;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
  protected a() {
    // can be accessed in derived classesx}
  }
  b() {
    this.a(); // can be accessed here
  }
}

const pointInstanceWithConstructor = new PointClassWithConstructor(10, 20);

class PointD3 extends PointClassWithConstructor {
  z: number;
  constructor(x: number, y: number, z: number) {
    super(x, y);
    this.z = z;
  }
  override b(smth?: string) {
    // need override because of noImplicitOverride is true
    console.log(smth);
  }
}

const point = new PointD3(10, 20, 30);
console.log(point.x, point.y, point.z);
//console.log(point.a); error: a is protected
//point.w = 10; error: w is readonly

//static!

class staticTest {
  static c = "ascas";
  static d() {
    console.log("static method");
  }
}
//access static properties and methods without creating an instance! only from original class
const s = staticTest.c;
const m = staticTest.d();

abstract class AbstractClass {
  abstract absMethod(): void;
  normalMethod() {
    console.log("normal method");
  }
}

//const a=new AbstractClass(); // error: cannot create an instance of an abstract class//

class test3 extends AbstractClass {
  absMethod(): void {} // need to implement abstract method!!!!!
}

const r = new test3();

//interfaces

interface c {
  test: () => void;
}

class D implements c {
  test() {} // need to implement all properties and methods of the interface and return the correct type
}
