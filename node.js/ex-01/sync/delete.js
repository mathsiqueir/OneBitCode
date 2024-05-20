import fs from "node:fs"
import { filename } from "./create.js"

export function deleteFile(){
	fs.unlink(filename,(error)=>{
		if(error){
			console.log(`não foi possivel deletar o arquivo, ${error.message}`)
		}else{
			console.log(`conteúdo do arquivo  "${filename}" foi deletado`)
		}
	})
}
