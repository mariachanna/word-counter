#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
async function countWords() {
    const userAns = await inquirer.prompt([
        {
            name: "sentence",
            type: "input",
            message: "Enter Your Sentence To Count The Words:"
        }
    ]);
    const words = userAns.sentence.trim().split(" ");
    console.log(words);
    console.log(chalk.blueBright(`Your sentence word count is ${words.length}`));
}
countWords();
