#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const BMI = await inquirer.prompt([
    {
        name: "height",
        type: "number",
        message: `${chalk.whiteBright.italic `Enter your height in Cm:`}`,
    },
    {
        name: "weight",
        type: "number",
        message: `${chalk.whiteBright.italic `Enter your Weight in Kg:`}`,
    },
]);
let result = BMI.weight / Math.round(BMI.height / 100) ** 2;
console.log(`${chalk.blueBright.italic `Your BMI is ${result}`}`);
if (BMI.height <= 0) {
    console.log(`${chalk.blue.italic `Please enter your height in a valid number.`}`);
}
if (BMI.weight <= 0) {
    console.log(`${chalk.blue.italic `Please enter your weight in a valid number.`}`);
}
