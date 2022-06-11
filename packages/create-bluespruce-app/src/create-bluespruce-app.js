#!/usr/bin/env node
import chalk from 'chalk'
// import prompts from 'prompts'
// import checkNodeVersion from 'check-node-version'
// import {name, version} from "../package.json"
import inquirer from 'inquirer'

console.log("Welcome to", chalk.blue("BlueSpruce.js"))

inquirer
.prompt([
    {
        type: "input",
        name: "prjname",
        message: chalk.blue("Package name:")
    },
    {
        type: "list",
        name: "template",
        message: chalk.blue("Pick a template"),
        choices: [
            "Starter",
            "Blank"
        ]
    }
])
.then((answers) => {
    if (answers.prjname != "") {
        console.log(`Creating ${answers.prjname} using template ${answers.template}`)
    } else {
        console.error("Error: Name required")
    }
})
.catch((error) => {
    console.error(error)
})