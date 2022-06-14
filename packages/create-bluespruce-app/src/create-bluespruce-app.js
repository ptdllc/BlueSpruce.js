#!/usr/bin/env node
import chalk from 'chalk'
import inquirer from 'inquirer'
import path from 'path'
import fs from 'fs'
import fse from 'fs-extra'
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log("Welcome to", chalk.blue("BlueSpruce.js"))

inquirer
.prompt([
    {
        type: "input",
        name: "prjname",
        message: chalk.blue("Package name:"),
        default() {
            return 'my-app';
        }
    },
    {
        type: "list",
        name: "template",
        message: chalk.blue("Pick a template"),
        choices: [
            "Starter",
            "Blank",
            "TS-Starter",
            "TS-Blank",
            "TS-Router"
        ]
    }
])
.then((answers) => {
    if (answers.prjname != "") {
        createBlueSpruceApp(answers.prjname, answers.template)
    } else {
        console.error("Error: Name required")
    }
})
.catch((error) => {
    console.error(error)
})

function createBlueSpruceApp(name, template){
    console.log(`Creating project "${name}" using BlueSpruce template "${template}"`)
    let templateURL = "../templates/starter" // Set Starter as default
    switch (template){
        case "Starter": templateURL = "../templates/starter"; break;
        case "Blank": templateURL = "../templates/blank"; break;
        case "TS-Starter": templateURL = "../templates/ts-starter"; break;
        case "TS-Blank": templateURL = "../templates/ts-blank"; break;
        case "TS-Router": templateURL = "../templates/ts-router"; break;
    }
    let templateDir = path.resolve(__dirname, templateURL)
    let projectDir = path.resolve(name)
    fs.mkdir(projectDir, (err) => {
        if (err) {
            return console.error(err);
        }
    }, {});
    fse.copy(templateDir, projectDir, (err) => {
        if (err) {
            return console.error(err);
        }},
    )
    console.log(
`
Now you can run
* cd ./${name}
* npm install
* npm run dev
`
    )
}