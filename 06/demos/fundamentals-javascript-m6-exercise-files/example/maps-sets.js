// Creating an object
const obj = {
  firstName: "David",
  lastName: "Tucker"
};

console.log('==================================Map Names ===========================================');

// Creating a Map
const map1 = new Map();
map1.set("firstName", "David");
map1.set("lastName", "Tucker");
console.log(map1);

console.log('==================================Map Details ===========================================');

// Using Non-string keys
map1.set(new Date().getTime(), "Number key");
map1.set([], "Array key");
map1.set(() => "Hi", "Function key");
console.log(map1);

console.log('==================================Map Size ===========================================');

// Checking the size
console.log(`Map Size: ${map1.size}`);


console.log('=============================================================================');


// Accessing values
console.log(map1.get("lastName"));
console.log(map1.get([]));
// console.log(map1.get("lastname");

console.log('=============================================================================');

// Deleting values
map1.delete("firstName");
console.log(`Map Size: ${map1.size}`);

console.log('=============================================================================');


// Creating a Set
const set1 = new Set();
set1.add("David");

console.log('=============================================================================');


// Checking the Set Size
console.log(`Set size: ${set1.size}`);

console.log('=============================================================================');

// Trying to add the "same" value
set1.add("David");
console.log(`Set size: ${set1.size}`);

console.log('=============================================================================');

// Adding in complex values
const team1 = new Set();
const emp1 = {
  firstName: "David",
  lastName: "Tucker"
};
team1.add(emp1);
console.log(`Set size: ${team1.size}`);

team1.delete("firstName");
console.log(`Set size: ${map1.size}`);

// Detecting if a Set has an object
console.log(`Does have employee: ${team1.has(emp1)}`);

// Removing values from a Set
team1.delete(emp1);
console.log(`Set size: ${team1.size}`);

// Remove all values
team1.clear();
