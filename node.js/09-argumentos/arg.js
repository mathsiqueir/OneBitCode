//argumentos igual passariamos dentro função

const args = process.argv

//
const namedArguments = {}


//console.log(args)
//ele vai pular os dois primeiros que será o node index.js
//console.log(args.slice(2))

args.slice(2).forEach((arg,index,array) => {
    //se começar com --
    if(arg.startsWith('--')){
        //vai pegar o argumento que contem --
        //vai retirar o --
        const argName = arg.slice(2)
        // vai pegar o argumento seguinte 
        const agrValue = array[index+1]
        namedArguments[argName] = agrValue
    console.log(argName)
    console.log(agrValue)
    }
});

console.log('argumentos informados: ', namedArguments)
