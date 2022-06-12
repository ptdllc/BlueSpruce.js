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
    let pageTemplate = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" href="/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${title}</title>
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/src/${name}.js"></script>
  </body>
</html>
`

    let JSTemplate = `import App from "./${svelteFile}.svelte";
import "./app.css";
import 'flowbite';

const app = new App({
    target: document.getElementById("app"),
});

export default app;
`
    fs.writeFile(`./${name}.html`, pageTemplate, (err) => { if (err) throw err })
    fs.writeFile(`./src/${name}.js`, JSTemplate, (err) => { if (err) throw err })
}