const btn = document.getElementById('verificar')

function destacarNomes(){
    const lista = document.getElementById('listaNomes').getElementsByTagName('li')
    const inputNome = document.getElementById('inputNome').value.toLowerCase()
    console.log(inputNome)
    console.log(lista)

    for (let i = 0; i < lista.length; i++) {
        const nome = lista[i].textContent.toLowerCase()
        if(nome.includes(inputNome) ){
            lista[i].innerHTML = `<strong>${lista[i].textContent}</strong>`
        }
        
    }
}

btn.addEventListener('click', destacarNomes)
btnDiff.addEventListener('click', )