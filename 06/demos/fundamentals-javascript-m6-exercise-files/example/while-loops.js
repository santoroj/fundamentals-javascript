// Array of Complex Objects
import employees from './data.json' assert { type: 'json' }

// Basic while loop
let i = 0;
while(employees[i]) {
  console.log(`Name: ${employees[i].firstName} ${employees[i].lastName}`);
  i++;
}

let x = 10;
while (x > 0 ) {
    console.log(`Count: ${x}`);
    --x;
}

console.log('-----');

// Do while loop
i = 0;
do {
  console.log(`Name: ${employees[i].firstName} ${employees[i].lastName}`);
  i++;
} while(employees[i]);


