// Hay tres conjuntos de tipos literales disponibles en TypeScript: string, number y boolean. 
// Mediante el uso de tipos literales, puede especificar un valor exacto que debe tener una cadena, un número o un valor booleano 
// (por ejemplo, "yes", "no" o "maybe").

// Los tipos literales se escriben como objetos, matrices, funciones o literales de tipo constructor, y se usan para crear tipos a partir de otros.

// La mejor manera de mostrar el uso de los tipos literales es con un ejemplo. 
// Esta definición de tipo crea un tipo literal denominado testResult, que puede contener uno de estos tres valores string:

type testResult = "pass" | "fail" | "incomplete";
let myResult: testResult;
myResult = "incomplete";
myResult ="pass";
// !myResult = "failure"           INVALID, ITS DIFFERENT   

//? NUMERIC LITERALS:

type dice = 1 | 2 | 3 | 4 | 5 | 6;
let diceRoll: dice;
diceRoll = 1;    //* Valid
diceRoll = 2;    //* Valid
// diceRoll = 7;    //* Invalid

