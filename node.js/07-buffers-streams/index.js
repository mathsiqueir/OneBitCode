const fs = require("node:fs")

//const streamLeitura = fs.createReadStream("arquivo.txt",{})
const streamLeitura = fs.createReadStream("bmw320i.jpg")

const buffer=[]

streamLeitura.on('data',(chunk)=>{
	buffer.push(chunk)
	console.log("um chunk foi processado")
})

streamLeitura.on("end", ()=>{
	console.log("buffer:\n",buffer)
	// const dadosCompletos =Buffer.concat(buffer).toString()
	// console.log(`dados lidos:\n ${dadosCompletos}`)
})