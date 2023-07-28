// Import Sample Data
import employees from './data.json' assert { type: 'json' };

import createPrompt from 'prompt-sync';
let prompt = createPrompt();


const logEmployee = (employee) => {
    Object.entries(employee).forEach(entry => {
        console.log(`${entry[0]}: ${entry[1]}`);
    });
}

// employee.isActive = getInput("Is employee active ( yes or no ): ", isBooleanInputValid, i => ( i === "yes"));


function getInput(promptText, validator, transformer) {
    // console.log("joes ", transformer);
    let value = prompt(promptText);
    if (validator && !validator(value)) {
        console.error(`ERROR: --Invald input`);
        process.exit(1);
    }

    if (transformer) {
        return transformer(value);
    }

    return value;
}

// // TransformBooleanValue functions ------------------------------------------------
// const TransformBooleanValue = (input) => {
//     return (input === "yes");
// }

// Validator functions ------------------------------------------------
const isStringInputValid = function (input) {
    return (input) ? true : false;
}

const isBooleanInputValid = function (input) {
    return (input === "yes" || input === "no");
}

const isStartYearValid = function (input) {
    let numValue = Number(input);
    if (!Number.isInteger(numValue) || numValue < 1900 || numValue > 2023) {
        return false;
    }
    return true;
}

const isStartMonthValid = function (input) {
    let numValue = Number(input);
    if (!Number.isInteger(numValue) || numValue < 1 || numValue > 12) {
        return false;
    }
    return true;
}

const isStartDayValid = function (input) {
    let numValue = Number(input);
    if (!Number.isInteger(numValue) || numValue < 1 || numValue > 31) {
        return false;
    }
    return true;
}

// Search for employees by ID
function searchById() {
    const id = getInput("Employee ID: ", null, Number);
    const result = employees.find(e => e.id === id);
    if (result) {
        console.log("");
        logEmployee(result);
    } else {
        console.log("No results...");
    }
}

// function searchByName(){
//     const myName = getInput("Employee Name: ", isStringInputValid );
//     const myFirstName = employees.find(e => e.firstName === myName);
//     if (myFirstName) {
//         console.log("");
//         logEmployee(myFirstName);
//     } else {
//         console.log("No results...");
//     }
// }

function searchByName() {
    const firstNameSearch = getInput("First Name: ").toLowerCase();
    const lastNameSearch = getInput("Last Name: ").toLowerCase();

    // Loop through each object and check the firstname and surname mataches 
    // Store object(s) into results array 
    const results = employees.filter(e => {
        console.log("Name  : " + firstNameSearch.toLowerCase() + " " + lastNameSearch.toLowerCase())
        if (firstNameSearch && !e.firstName.toLowerCase().includes(firstNameSearch)) {
            return false;
        }
        if (lastNameSearch && !e.lastName.toLowerCase().includes(lastNameSearch)) {
            return false;
        }
        console.log("Found Name  : " + firstNameSearch.toLowerCase() + " " + lastNameSearch.toLowerCase())
        return true;
    });

    // for each object found above the log to output each value in object
    results.forEach((x, idx) => {
        console.log("");
        console.log("Results: " + x);
        console.log(`Search Result ${idx + 1} -----------------------------------------------------------`);
        logEmployee(x);
    });
}


//  Application commands  ---------------------------------------------
function listEmployees() {
    console.log(`Employee List ----------------------------`);
    console.log('');

    // for (let emp of employees) {
    //   for (let property in emp) {
    //     console.log(`${property}: ${emp[property]}`);
    //   }
    //   console.log('');
    //   prompt('Press enter to continue...');
    // }

    employees.forEach(e => {
        logEmployee(e);
        prompt('Press enter to continue...');
    });
    console.log(`Employee List Completed`);
}
//  Application execution  ---------------------------------------------

function addEmployee() {
    console.log(`Add Employee -----------------------------`);
    console.log('');
    let employee = {};

    employee.firstName = getInput("First Name: ", isStringInputValid);
    employee.lastName = getInput("Last Name: ", isStringInputValid);

    let startDateYear = getInput("Employee Start Year ( 1990-2023 ): ", isStartYearValid);
    let startDateMonth = getInput("Employee Start Date Month ( 1-12 ): ", isStartMonthValid);
    let startDateDay = getInput("Employee Start Date Day ( 1-31 ): ", isStartDayValid);

    employee.startDate = new Date(startDateYear, startDateMonth - 1, startDateDay);
    employee.isActive = getInput("Is employee active ( yes or no ): ", isBooleanInputValid, i => (i === "yes"));


    // Output Employee JSON
    const json = JSON.stringify(employee, null, 2);
    console.log(`Employee: ${json}`);
}


// Get the command the user wants to exexcute
const command = process.argv[2].toLowerCase();

switch (command) {

    case 'list':
        listEmployees();
        break;

    case 'add':
        addEmployee();
        break;

    case 'search-by-id':
        searchById();
        break;

    case 'search-by-name':
        searchByName();
        break;

    default:
        console.log('Unsupported command. Exiting...');
        process.exit(1);

}



