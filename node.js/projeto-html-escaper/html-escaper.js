const fs = require("node:fs")
const path = require("node:path")
const readline = require("node:readline")

run()

function escapeHtmlSpecialCharacters(text){
  //replace para fazer a troca das letras
  //caracteres dentro da expressao regular <>&
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

function escapeHtmlFile(inputFilePath,outputFilePath){
  try {
    const fileContent = fs.readFileSync(inputFilePath, "utf-8")

    //chamar o conteudo do arquivo
    const escapedContent = escapeHtmlSpecialCharacters(fileContent)

    //vai escrever em outro arquivo o conteudo escapado
    fs.writeFileSync(outputFilePath, escapedContent,'utf-8')

    console.log('arquivo escapado com sucesso: '+outputFilePath)
  } catch (error) {
    console.log("ERROR: "+ error.message)
    process.exit(1) //processo saiu com erro
  }
}

//perguntar pelo caminho
function askFilePath(question){

  const rl = readline.createInterface({input:process.stdin, output: process.stdout})

  return new Promise((resolve)=>{
    rl.question(question, (answer)=>{
      resolve(answer)
    })
  })
}


async function userInteraction(){
  //perguntar o caminho 
  //node html-escaper.js <inputPath> <outPath>
  let inputPath = process.argv[2]
  if(!inputPath){
    inputPath = await askFilePath('informe o caminho do arquivo de entrada: ')
  }
  inputPath = path.resolve(inputPath)
  
  const defaultName = `escaped_${path.basename(inputPath)}.txt`
  const answer = await askFilePath(`Informe o caminho do arquivo de saida(padrão: ${defaultName}`)
  let outputPath = answer.lenght > 0 ? answer : defaultName
  outputPath = path.resolve(outputPath)

  escapeHtmlFile(inputPath, outputPath)
}

function run(){
  //se o usuario passar 4 argumentos
  //node 
  if(process.argv >= 4){
    escapeHtmlFile(
      path.resolve(process.argv[2]),
      path.resolve(process.argv[3])
    )
  }else{
    console.log(" - - - - - - - - - - - -- ")
    console.log("html tag escaper")
    console.log("- - - - - - - - - \n")
    console.log('argumentos não informados')
    userInteraction()
  }
}