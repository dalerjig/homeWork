//how to return types!

type point = { x: number; y: number };
type p = keyof point; //type p = "x" | "y";

//!!!!!!
function myF() {
  return { a: 1 };
}
type K = ReturnType<typeof myF>;
// type K = {
//     a: number;
// }

//or

type MyFunc = () => { a: number };
type MyK = ReturnType<MyFunc>;

//!!!!!

const MyArr = [{ name: "Dal", age: 18 }];

type MyArrType = typeof MyArr; //its []

type MyObjType = MyArrType[number]; //its {}

type MyAge = MyObjType["age"]; //!!!!

//!!!!!!!!!!!

type MessageOf<T> = T extends { message: unknown } ? T["message"] : never;

interface Email {
  message: string;
}

interface Cat {
  age: number;
}

type EmailContent = MessageOf<Email>; //type EmailContent = string

type CatContent = MessageOf<Cat>; //type CatContent = never

//!!!!!!!!!!
interface Test {
  [key: string]: number;
}

type OptionFlags<T> = {
  [Prop in keyof T]: boolean; //may use for mapping one type to another
};

//!!!!!!!

type Greeting = "hello";

type FullGreeting = `${Greeting}+"world"`;
