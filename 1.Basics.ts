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
