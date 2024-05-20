import fs from 'node:fs'
const content = 'Arquivo criado com sucesso'
export const filename = 'meuArquivo.txt'

export function createFile(){
	fs.writeFileSync(filename, content,'utf-8')
	
}