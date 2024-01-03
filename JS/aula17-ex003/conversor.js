const valor = parseFloat(prompt("Digite um valor em metros: "))
const opcao = 
prompt("escolha para qual unidade de medida o valor deve ser convertido\n milímetro(mm)\n centímetro(cm)\n decímetro(dm)\ndecâmetro(dam)\n hectômetro(hm) \nquilômetro(km)")

let conversao = 0

switch(opcao){
    case "mm":
        
        alert(valor *1000)
        break
    case "cm":
        alert(valor *100)
        break
    case "dm":
        alert(valor *10)
        break
    case "dam":
        alert(valor /10)
        break
    case "hm":
        alert(valor /100)
        break
    case "km":
        alert(valor /1000)
        break
}