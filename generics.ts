function logTime(num: number): number {
  console.log(Date.now());
  return num;
}

function logTime2(num: string): string {
  console.log(Date.now());
  return num;
}

function genericLogTime<T>(num: T): T {
  console.log(Date.now());
  return num;
}
//!!!!!!!!
genericLogTime<number>(1);
genericLogTime<string>("1");

interface myInterface {
  transform: <T, F>(a: T) => F; //change types!
}

class MyGenClass<T> {
  value: T;
}

const aC = new MyGenClass<number>();
aC.value;

//!!!!!!!!!!!!
interface TimeStamp {
  stamp: number;
}

function logTimeStamp<T extends TimeStamp>(num: T): T {
  console.log(num.stamp);
  return num;
}
