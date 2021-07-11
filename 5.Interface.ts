/**
 * Interface
 * used to define the shape of data
 */

function printPersonInfo({ name, country }: Person): Person {
  console.log(`Hello ${name}, from ${country}`);
  return { name, country };
}

interface Person {
  name: string;
  country: string;
  age?: number;
}

let shihab = {
  name: "Shihab",
  country: "India",
};

printPersonInfo(shihab);

let kyle = {
  name: "Kyle",
  country: "Russia",
  age: 43,
};

printPersonInfo(kyle);

// can have more keys than defined in interface
let colt = {
  name: "Colt",
  age: 32,
  country: "Germany",
  company: "GitHbb",
};

printPersonInfo(colt);
