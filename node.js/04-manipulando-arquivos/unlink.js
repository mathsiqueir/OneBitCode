const fs = require('node:fs')

fs.unlink('arquivo.csv',(error)=>{
	if(error){
		console.log(`erro ao excluir o arquivo ${error.message}`)
	}else{
		console.log('arquivo excluido com sucesso')
	}
})