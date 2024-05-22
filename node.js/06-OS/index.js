const os = require("os")

//é possivel saber o sistema do usuario por aqui
const platform = os.platform()
console.log("Plataforma do SO: ", platform)

const arquitetura = os.arch()
console.log(`Arquitetura do SO: ${arquitetura}`)

const nucleo = os.cpus()
console.log(`Quantidade de núcleos: ${nucleo}`)


const memory = os.totalmem()
console.log(`Total de memória doo PC:, ${Math.floor(memory / 1024 /1024/1024)} GB`)