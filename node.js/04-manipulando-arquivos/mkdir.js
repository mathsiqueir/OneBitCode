const fs = require("node:fs")

fs.mkdir('arquivos-txt',{recursive: true},(error)=>{
	if(error){
		console.log(`erro ao criar pasta${error.message}`)
	}else{
		console.log('pasta criada com sucesso')
	}
})