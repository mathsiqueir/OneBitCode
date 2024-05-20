//node utilizado como back-end do javascript

const fs = require('fs')
console.log('inicio')


//operação assicrona, lê depois que o resto do arquivo é lido
fs.readFile('./arquivo.txt', 'utf-8',(err,data)=>{
	if(err) throw err;
	console.log(data)
})

console.log('fim')