#! /usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Enter first number", type: "number", name: "firstNumber" },
  { message: "Enter SecondNumber", type: "number", name: "secondNumber" },
  {
    message: "select one of the operators to perform operation",
    type: "list",
    name: "operators",
    choices: ["Addition", "Substraction", "Multiplication","Division"],
  },
]);
//condition statement
if (answer.operators === "Addition") {
(console.log(answer.firstNumber + answer.secondNumber))
}
else if (answer.operators === "Substraction")
console.log(answer.firstNumber - answer.secondNumber);
else if (answer.operators === "Multiplication")
console.log(answer.firstNumber * answer.secondNumber);
else if (answer.operators === "Division")
console.log(answer.firstNumber / answer.secondNumber);
console.log("Please select valid number")
