// functions in TS
const helloFunction = () => {
  console.log("Hello world");
};

helloFunction();

const sayWord = (word: string): string => {
  console.log(`Saying ${word}`);
  return word;
};

sayWord("Massion");
// sayWord(10); // ERROR

// default parameter
// optional parameter
function sayHi(name = "Shihab", country?) {
  const str = country ? `,from ${country}` : "";
  console.log(`Hi ${name + str}`);
}

sayHi();
