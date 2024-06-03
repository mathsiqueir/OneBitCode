//process.stdin
//process.stdout
// process.stdout.write("Olá, Mundo!")

//dados de entrada no stdin
// process.stdin.on('data',(data)=>{
// 	process.stdout.write(`você digitou: ${data}`)
// })

const readLine = require("node:readline")

const rl = readLine.createInterface({input:process.stdin, output: process.stdout})

// rl.on('line',(input)=>{
// 	rl.write(`você digitou: ${input}`)
	
// })

rl.question("qual é o seu nome: ",(answer)=>{
	rl.write(`meu nome é ${answer}!`)
	rl.close()
})

rl.on("close",()=>{
	rl.write("\nsaindo!")
	rl.close()
	//process.exit(0)
})

rl.on('SIGINT', ()=>{
	rl.question('deseja realmente sair? (s/n)', (answer)=>{
		if(answer.trim().toLowerCase === 's'){
			process.exit(0)
		}else{
			rl.write('você decidiu continuar.')
		}
	})
})