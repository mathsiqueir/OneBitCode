
class User {
    //atributos do método
    constructor(fullname, email, password) {
        this.fullname = fullname
        this.email = email
        this.password = password
    }
    login(email, password) {
        if (this.email === email && this.password === password) {
            console.log('Login realizado')
        } else {
            console.log('falha no login')
        }
    }
}

const siqueira = new User('siqueira','siqueira@gmail.com','carla')
console.log(siqueira)
siqueira.login('siqueira@gmail.com', 'carla')