import { readFileSync, writeFileSync } from "node:fs"
import path, { resolve } from "node:path"
import readline from "node:readline"

function escapeHtmlSpecialCharacters(text){
  return text.replace(/[<>&]/g,(match)=>{
    switch(match){
      case '<':
        return "&lt;"
      case '>':
        return "&gt;"
      case '&':
        return "&amp;"
      default:
        return match
    }
  })
}

function espaceHtmlFile(inputFilePath,outputFilePath){
  try {
    const fileContent = readFileSync(inputFilePath, "utf-8", )
    const escapedContent = escapeHtmlSpecialCharacters(fileContent)
    writeFileSync(outputFilePath, escapedContent,'utf-8')
    console.log('arquivo escapado com sucesso: '+outputFilePath)
  } catch (error) {
    console.log("ERROR: "+ error.message)
    process.exit(1)
  }
}

function askFilePath(question){
  const rl = readline.createInterface({input:process.stdin, output: process.stdout})

  return new Promise((resolve, reject)=>{
    rl.question(question, (answer))
  })
}