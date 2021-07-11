// Implicit types
/**
 * TS infer the type from the value by default
 */
let myArg = "Shihab";
myArg = "Sami";
myArg = 10;

// by seeing LOC 7 we think
// myArg is of type number, which is wrong
let cannova = myArg;
cannova = 20;
