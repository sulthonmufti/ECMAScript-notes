//ternary operator => operator sederhana dari if statement

const grade = 75;
let greeting;

//without ternary operator
if (grade >= 75) {
    greeting = "God job!";
} else {
    greeting = "you have tried your best";
}
document.writeln(greeting);

//use ternary operator
const grade2 = 80;
const greeting2 = grade2 >= 75 ? "God job!" : "you have tried your best"; //variable grade2 bisa pakai const
