import createPrompt from 'prompt-sync';
let prompt = createPrompt();

let employee = {};

let firstName = prompt("First Name: ");

if (!firstName){
    console.error(`Invalid first name`);
    process.exit(1);
}

employee.firstName = firstName;
// console.log(`Last Name : ${firstName}`);


// -------------------------------------------------------------------------------

let lastName = prompt("Last Name: ");

if (!lastName){
    console.error(`Invalid last name`);
    process.exit(1);
}

employee.lastName = lastName;

// console.log(`Last Name : ${lastName}`);

// -------------------------------------------------------------------------------


let startDateYear = prompt("Employee Start Year (1990-2023): ");
startDateYear = Number(startDateYear);

// Check if it is a valid integer 
if(!Number.isInteger(startDateYear)){
    console.error(`Enter a valid start date year`)
    process.exit(1);
}

console.log(`Start Date Year : ${startDateYear}`);
if ( startDateYear < 1990  || startDateYear > 2023 ){
    console.error(`Start Date Year ${startDateYear} is not valid`);
    process.exit(1);
} 

// console.log(`Start Date Year : ${startDateYear}`);
employee.startDateYear = startDateYear;

// -------------------------------------------------------------------------------

let startDateMonth = prompt("Employee Start Date Month (1-12): ");
startDateMonth = Number(startDateMonth);
// Check if it's a valid Number
if(!Number.isInteger(startDateMonth)){
    console.error(`Start Date Month ${startDateMonth} is not valid`);
    process.exit(1);
}


if ( startDateMonth < 1 || startDateMonth > 12 ){
    console.error(`Start Date Year ${startDateMonth} is not valid`);
    process.exit(1);
} 

// console.log(`Start Date Month : ${startDateMonth}`);
employee.startDateMonth = startDateMonth


// -------------------------------------------------------------------------------

let startDateDay = prompt("Employee Start Date Day (1-31): ");
startDateDay = Number(startDateDay);
// Check if it's a valid Number
if(!Number.isInteger(startDateDay)){
    console.error(`Start Date Day ${startDateDay} is not valid`);
    process.exit(1);
}


if ( startDateDay < 1 || startDateDay > 12 ){
    console.error(`Start Date Year ${startDateDay} is not valid`);
    process.exit(1);
} 

// console.log(`Start Date Day : ${startDateDay}`);
employee.startDateDay = startDateDay

// -------------------------------------------------------------------------------

employee.startDate = new Date(startDateYear, startDateMonth - 1, startDateDay);

let isActive = prompt("Is employee active ( yes or no ) ? ");

if (isActive !== "yes" && isActive !== "no"){
    console.error(`Enter yes or no for employee status`);
    process.exit(1);
}
employee.isActive = (isActive == "yes");


//-------------------------------------------------------------------------------

// Now print out the Employee Object as a JSON string to the console
const json = JSON.stringify(employee, null, 2);
console.log(`Employee: ${json}`);


//-------------------------------------------------------------------------------