let num1 = parseInt(prompt("Enter the first number: "))
let num2 = parseInt(prompt("Enter the second number: "))
let num3 = parseInt(prompt("Enter the third number: "))

let max = Math.max(num1, num2, num3)
let min = Math.min(num1, num2, num3)

console.log(`Max element = ${max}`)
console.log(`Min element = ${min}`)

console.log("---------------------------------------")

let char = prompt("Enter a character: ").toLowerCase()

if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
    console.log(`The character "${char}" is a vowel.`)
}
else {
    console.log(`The character "${char}" is a consonant.`)
}

console.log("---------------------------------------")

function multiplicationTable(number) {
    let table = "";
    for (let i = 1; i <= 12; i++) {
        table += `${number * i} `;
    }
    return table;
}

let input = prompt("Enter an integer:");

if (isNaN(input) || input === null || input === "") {
    console.log("Invalid input");
}
else {
    let number = parseInt(input);
    let multiplication = multiplicationTable(number);
    console.log(`${multiplication}`);
}

console.log("---------------------------------------")

let number = parseInt(prompt("Enter a number: "));

if (isNaN(number) || number === null || number === "") {
    console.log("Invalid input");
}
else {
    let input = parseInt(number);
    let evenNumbers = "";
}

for (let i = 2; i <= number; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

console.log("---------------------------------------")

let marks = [];
for (let i = 0; i < 5; i++) {
    let mark = parseInt(prompt(`${i+1}: `));
    marks[i] = mark;
}

let totalMarks = 0;
for (let i = 0; i < 5; i++) {
    totalMarks += marks[i];
}

let averageMarks = totalMarks / marks.length;

let percentage = (totalMarks / 500) * 100;

console.log(`Total marks = ${totalMarks}`);
console.log(`Average Marks = ${averageMarks}`);
console.log(`Percentage = ${percentage}%`);

console.log("---------------------------------------")

let marks2 = [];
for (let i = 0; i < 5; i++) {
    let mark = parseInt(prompt(`Enter mark of subject ${['Physics', 'Chemistry', 'Biology', 'Mathematics', 'Computer'][i]}: `));
    marks2[i] = mark;
}

let totalMarks2 = 0;
for (let i = 0; i < 5; i++) {
    totalMarks2 += marks2[i];
}

let percentage2 = (totalMarks2 / 500) * 100;

let grade;
if (percentage2 >= 90) {
    grade = "Grade A";
}
else if (percentage2 >= 80) {
    grade = "Grade B";
}
else if (percentage2 >= 70) {
    grade = "Grade C";
}
else if (percentage2 >= 60) {
    grade = "Grade D";
}
else if (percentage2 >= 40) {
    grade = "Grade E";
}
else {
    grade = "Grade F";
}

console.log(`Your total marks are: ${totalMarks2}`);
console.log(`Your percentage is: ${percentage2}%`);
console.log(`Your grade is: ${grade}`);