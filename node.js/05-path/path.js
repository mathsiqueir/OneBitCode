//caminho - path
const path = require('node:path')
//diretorio - dir

const dir = 'src'
//arquivo
const file = 'app.js'


//join - entrar
//const fullPath = path.join('src','scripts','arquivo.js')
//   src\scripts\arquivo.js vai criando pastas e pastas

//dirname = todo caminho até o arquivo
const fullPath = path.join(__dirname, dir,file)
console.log(fullPath)

// const relativePath = path.join('.',dir, file)
// console.log(relativePath)

const relativePath = '../arquivos/relatorio.pdf'

const absolutePath = path.resolve(__dirname, relativePath)
console.log(absolutePath)

//ultimo nome do caminho
const fileName = path.basename(relativePath)
console.log(fileName)

//nome da extensão
const ext = path.extname(absolutePath)
console.log(ext)