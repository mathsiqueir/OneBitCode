
import fs from 'node:fs'
import {filename} from './create.js'

export function showFile(){
	fs.readFileSync(filename, (error)=>{
		if(error){
			console.log(`não foi possivel criar o arquivo ${error.message}`)
		}else{
			console.log(`Arquivo "${filename}" Lido com sucesso`)
		}
	})
}
