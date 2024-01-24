function register(element){
    const username = element.children.username.value
    const password = element.children.password.value
    const confirm_password = element.children.confirm_password.value


    if(password === confirm_password){
        alert("Usuario "+ username +" Registrado!")

    }else{
        alert("Senha não confere")
    }
    console.log({username,password,confirm_password})
    //reseta o resultado
    document.getElementById('username').value = ''
    document.getElementById('password').value = ''
    document.getElementById('confirm_password').value = ''
}