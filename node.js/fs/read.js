const fs = require("node:fs");
const readLine = require("node:readline");
//escrevendo um arquivo
const fileName = "arquivo.txt";

const exists = fs.existsSync(fileName)

if(exists){
  fs.readFile(fileName, "utf-8", (error, data) => {
    if (error) {
      console.log("erro ao escrever o arquivo: " + fileName + "\n" + error.message);
      return;
    }
    //separa os arrays por um determinado metodo definido, nesse caso o ','
    const entries = data.split(',')
    console.log(entries)
    entries.forEach((entry)=>{
      console.log(entry)
    })
  });

}else{
  console.log("o arquivo não existe")
}


console.log("Fim");
