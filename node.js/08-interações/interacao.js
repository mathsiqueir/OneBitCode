//standard in e out
//input e output

//vai ser exbido no terminal - saida
// process.stdout.write("olá, mundo! ");

//entrada - associar a um evento
//data - vai ficar esperando uma resposta minha pelo terminal
// process.stdin.on("data", (data) => {
//   process.stdout.write(`Você digitou: ${data}`);
// });

//criando interações no terminal

const readLine = require("node:readline");

//criar essa interface para a aplicação ser efetuada
const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//on - lister que fica ouvindo sempre
//line = enter
// rl.on('line', (input)=>{
//     rl.write(`Você digitou: ${input}`)
// })

//tratar o que foi escrito no terminal
rl.question('Qual é o seu nome?  ',(answer)=>{
    rl.write(`Olá, ${answer}!\n`)
    rl.close()
})


// quando o programa for fechar
//once para ler apenas uma vez
 rl.once('close',()=>{
     rl.write('Saindo...')
     process.exit(0) //fechar sem erro

 })

//singint == interrupção do sistema ctrl + c
rl.on('SIGINT',()=>{
    rl.question('deseja realmente sair? (s/n)',(answer)=>{
        //TRIM para remover espaço linhas e acentos
        if(answer.trim().toLowerCase === 's'){
            process.exit(0)
        }else{
            rl.write('Você escolheu continuar')
        }
    })
})