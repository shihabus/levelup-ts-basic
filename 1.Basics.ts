let isOpen = false;
// isOpen = "shihab";

// unions
const myArr: (string | number)[] = [1, "2", 5];

// optional
const personInfo: [string, number, boolean?] = ["Shihab", 25, false];

// enum
enum Colors {
  red,
  green,
  blue,
}

const myHairColor: Colors = Colors.blue;

// any
let jargon: any = "Amie";
jargon = 10;

// jargon.toUpperCase(); // ERROR

// unknown
let mass: unknown = 10;
mass = "10";

if (typeof mass === "string") {
  mass.toUpperCase();
}

// non-null assertion
let username!: string;
console.log(username);

// passing callback
function multiplyNumbers(multiplier: number, cb: (num: number) => number) {
  return cb(multiplier);
}

multiplyNumbers(10, (number) => number * 10);

function logMessage(msg: string, upCase = true) {
  if (upCase) {
    return msg.toUpperCase();
  }
  return msg;
}

// logMessage("shihab", 10); // ERROR

// INDEXABLE types
interface PersonInfo {
  name: string;
  age?: number;
  [info: string]: string | number;
}

const aamir: PersonInfo = {
  name: "Aamir",
  age: 25,
  country: "India",
  phone: 9946223315,
};

const sheeba: PersonInfo = {
  name: "Sheeba",
};
