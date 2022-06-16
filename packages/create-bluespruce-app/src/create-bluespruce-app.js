#!/usr/bin/env node
import chalk from 'chalk'
import inquirer from 'inquirer'
import path from 'path'
import fs from 'fs'
import fse from 'fs-extra'
import degit from 'degit'
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

console.log("Welcome to", chalk.blue("BlueSpruce.js"))
console.log("Name your app. Then pick a", chalk.blue.bold("Template") + ".", "Don't know what to pick? Try", chalk.blue.bold("Starter") + "!!")

inquirer
.prompt([
    {
        type: "input",
        name: "prjname",
        message: chalk.blue("Package name:"),
        default() {
            return 'my-app'
        }
    },
    {
        type: "list",
        name: "template",
        message: chalk.blue("Pick a template"),
        choices: [
            "Starter",
            "Default",
            "Skeleton",
            "Custom"
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
    let templateURL = ""
    switch (template){
        case "Default": 
            templateURL = "../templates/Default"
            downloadTemplate(name, templateURL)
            break
        case "Skeleton": 
            templateURL = "../templates/Skeleton"
            downloadTemplate(name, templateURL)
            break
        case "Starter": 
            templateURL = "../templates/Starter"
            downloadTemplate(name, templateURL)
            break
        case "Custom":
            inquirer
            .prompt([
                {
                    type: "list",
                    name: "githost",
                    message: chalk.blue("Where is the template hosted?"),
                    choices: [
                        "GitHub",
                        "GitLab"
                        // More will be added but this is it for now
                    ]
                },
                {
                    type: "input",
                    name: "gitrepo",
                    message: chalk.blue("Enter repo ( USERNAME/REPONAME )")
                }
            ])
            .then((answers) => {
                if (answers.gitrepo != "") {
                    let gitclone = ""
                    switch (answers.githost){
                        case "GitHub":
                            gitclone = "github:" + answers.gitrepo
                            break
                    }
                    const emitter = degit(gitclone, {})
                    emitter.on("info", info => {
                        console.log(info.message)
                    })
                    emitter.clone("../templates/Custom").then(() => {
                        templateURL = "../templates/Custom"
                        downloadTemplate(name, templateURL)
                    })
                } else {
                    console.error("Error: repository not given")
                    process.exit()
                }
            })
            .catch((error) => {
                console.error(error)
            })
        break
    }
}

function downloadTemplate(name, templateURL){
    let templateDir = path.resolve(__dirname, templateURL)
    let projectDir = path.resolve(name)
    fs.mkdir(projectDir, (err) => {
        if (err) {
            return console.error(err)
        }
    }, {})
    fse.copy(templateDir, projectDir, (err) => {
        if (err) {
            return console.error(err)
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