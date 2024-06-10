const fs = require("node:fs");
const readLine = require("node:readline")
//escrevendo um arquivo 
const fileName = 'arquivo.txt'
const content = 'entrada1, entrada2, entrada3'

fs.writeFile(fileName,content,'utf-8',(error,data)=>{
    if(error){
        console.log('erro ao escrever o arquivo: '+fileName +'\n'+ error.message)
        return
    }
    console.log('arquivo criado de forma assincrona')
})

module.exports = {fileName}

