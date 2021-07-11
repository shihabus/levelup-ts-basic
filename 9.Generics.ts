function outputInput(arg) {
  return arg;
}

outputInput("hi");
outputInput(3);

/**
 * if we try to annotate the above function
 * we have to handle all the cases for different
 * input types.
 * Generics help us do this easily. It let us access
 * the input type on run time.
 */

function outputInput2<T>(arg: T): T {
  return arg;
}

let result1 = outputInput2("name");
let result2 = outputInput2(12);
