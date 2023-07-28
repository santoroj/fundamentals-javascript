let quote = `David said, "Javascript is great."`;
quote = "Dave said, \"Javascript is great. \"";
quote = `JavaScript can use 'single and "double" quotes.`;
quote = `In Javascript, you must escape the \\ character`;
console.log(quote);

fullname = "David Tucker";

// String length 
let length = quote.length;
console.log(`Quote Length: ${length}`);



// Accessing sepcific characters
let secondCharacter = quote[1];
console.log(`Second Characters: ${secondCharacter}`);

fullName = "David Tucker";

// Changing case
let uppercaseName = fullName.toUpperCase();
console.log(uppercaseName);
let lowercaseName = fullname.toLowerCase();
console.log(lowercaseName);

// Fining a substring
let idx1 = fullName.indexOf("Dav");
console.log(`index 1 of ${idx1}`);

let idx2 = fullName.indexOf("ker");
console.log(`index 2 of ${idx2}`);

let idx3 = fullName.indexOf("xyz");
console.log(`index 3 of ${idx3}`);   // returns -1 as it cannot it

// Does a string contain a substring
let doesContain = fullName.includes("Dav");
console.log(doesContain);  // returns true if found

// Defining boolean
let trueValue = true;
let falseValue = false;

// Using the NOT operator with Booleans
let notTrue = !true 
console.log(notTrue);
let notFalse = !false
console.log(notFalse);


// Define number values
let num1 = 6;
let num2 = 1000000;
let numb3 = 1.234567;

// Defining big and small numbers
let num4 = 1560000000000000000000;
console.log(num4);

let num5 = -0.0000000000000000021;
console.log(num5);


// Cerating numbers with e-notation
let num6 = 1.2e+10;
console.log(num6);


// How big and small can we get with the number type
console.log(`Minimum Value: ${Number.MIN_VALUE}`);
console.log(`Minimum Safe Integer: ${Number.MIN_SAFE_INTEGER}`);
console.log(`Maximum Value: ${Number.MAX_VALUE}`);
console.log(`Maximum Safe Integer: ${Number.MAX_SAFE_INTEGER}`);

// Creating BigInt's
let bigInt1 = 1n;
let bigInt2 = 1_560_000_000_000_000_000_000n;