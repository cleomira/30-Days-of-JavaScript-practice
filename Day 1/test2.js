let numbers = [6,7,8,5]
// for adding an element
numbers.push(3);
console.log(numbers) // [6,7,8,5,3]

//for removing an element
numbers.splice(2,1) // at index 2, remove one element
console.log(numbers) // (6,7,5,3)

let personOne = { name: "cleopatra", age: 30 };
let personTwo = { name: "cleopatra", age: 30 };
let personThree = personOne;

console.log(personOne === personTwo); // Output: false
console.log(personOne === personThree); // Output: true

let wholeNumber = 42; // Integer number
let decimalNumber = 7.15; // Floating-point number

let result = wholeNumber + decimalNumber;
console.log(result); // Output: 49.15

let person = {
    firstName: "Ngozi",
    lastName: "Ugwu",
    age: 30,
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};

console.log(person.firstName); // Output: Ngozi
console.log(person.age); // Output: 30
console.log(person.fullName()); // Output: Ngozi Ugwu

let firstMan = 'husband'
let secondMan = "brother"
let thirdMan = `son`

console.log(firstMan); // output: husband

let string1 = "Welcome";
let string2 = "home";
let concatenatedString = `${string1}, ${string2}!`;
console.log(concatenatedString); // Output: Welcome, home!

let string = "house"; // true
let floatNumber = 3.5; // false

let a = true;
let b = false;

console.log(a && b); // Output: false (AND operation)
console.log(a || b); // Output: true (OR operation)
console.log(!a); // Output: false (NOT operation)

let value1 = 0;
let value2 = "welcome";

console.log(Boolean(value1)); // Output: false (0 is falsy)
console.log(Boolean(value2)); // Output: true (non-empty strings are truthy)

let age = 35;

if (age >= 30) {
    console.log("You are ripe for marriage.");
} else {
    console.log("Focus more on building your career.");
}

let myAge;
console.log(myAge); // Output: undefined

function myAge() {
    // No return statement
}

console.log(myAge()); // Output: undefined

let myInfo = { name: "Cleo" };
console.log(myInfo.age); // Output: undefined (property does not exist)