function register(ev){
    console.log(ev)
}


const button = document.getElementById('register-button')
//vamos adicionar eventos ao botão
// addEventListener ouvir de eventos tipo onClick
button.addEventListener('click',register)