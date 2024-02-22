let dobras = 0
let opcao = ""

opcao = prompt("deseja entrar na dobra espacial\n1 - sim \n2 - não ")

while(opcao == '1'){
    dobras += 1
    opcao = prompt("deseja entrar na dobra espacial\n1 - sim \n2 - não ")
}

alert(`a nave fez ${dobras} dobras`)