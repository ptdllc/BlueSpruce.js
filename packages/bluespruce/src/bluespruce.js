#!/usr/bin/env node
import chalk from 'chalk'
import inquirer from 'inquirer'
import path from 'path'
import fs from 'fs'
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

switch (process.argv[2]){
    case "--newpage":
        inquirer
        .prompt([
            {
                type: "input",
                name: "pageName",
                message: chalk.blue("Page name:"),
                default() {
                    return 'page-2';
                }
            },
            {
                type: "input",
                name: "pageTitle",
                message: chalk.blue("Page title:"),
                default() {
                    return 'BlueSpruce App';
                }
            },
            {
                type: "input",
                name: "svelteFile",
                message: chalk.blue("Svelte File:"),
                default() {
                    return "App";
                }
            }
        ])
        .then((answers) => {
            console.log(answers)
            newPage(answers.pageName, answers.pageTitle, answers.svelteFile)
        })
        .catch((error) => {
            console.error(error)
        })
    break;
}

function newPage(name, title, svelteFile){
    let pageTemplate = `<script>
    import "../app.css"
<script>
<main></main>
<style></style>`
    fs.writeFile(`./src/routes/${name}.svelte`, pageTemplate, (err) => { if (err) throw err })
}