//fs - file system

const fs = require('node:fs');

const content = ' entrada 1, entrada 2, entrada 3'

fs.writeFile("./arquivoAsync.txt",content,'utf-8', (error)=>{
	if(error){	
		console.log('erro ao escrever o arquiv', error.message)
	}
	console.log('arquivo criado com sucesso')
})

// try {
// 	fs.writeFileSync('./arquivo.txt',"Hello, World!","utf-8")
// 	console.log('arquivo criado com sucesso')
// } catch (error) {
// 	console.log('erro ao escrever o arquiv', error.message)
// }
