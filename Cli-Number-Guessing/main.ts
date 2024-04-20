#! /usr/bin/env node
import inquirer from "inquirer";

const ramdomNumber = Math.floor(Math.random() * 6 + 1);

const answer = await inquirer.prompt([{
    name:"userGussedNumber",
    type:"number",
    message:"Please guess a number between 1-10",
}])

if(answer.userGussedNumber === ramdomNumber){
    console.log("Congratulations!!! you guessed right number. ")
} 
else{
    console.log("You guessed wrong number")
}