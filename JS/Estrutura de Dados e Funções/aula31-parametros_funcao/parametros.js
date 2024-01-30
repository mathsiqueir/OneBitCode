'// parametro é a entrada da função

function dobro(/*parameto vem aqui*/ x ){
    alert("O dobro de "+ x+" é "+(x*2))

}

//dobro(5)
//dobro(8)

//dobro()
//resposta O dobro de undefined é NaN
//Nan not a Number é praticamente um erro em JS

function dizerOla(nome = "mundo"){//declarei um parametro padrão 
    alert("Olá, "+nome+"!")
}

//dizerOla("Matheus")
//dizerOla()

//Uma função pode ter quantos parametros nós quisermos
function soma(a , b){
    alert("Resultado da soma entre "+a+" e "+b+ " é "+(a+b))

}
//soma(7,6)

function criarUsuario(nome, email, senha, tipo){
    const usuario ={
        nome , //mesmo que nome(property): nome(parametro)
        email ,
        senha,
        tipo

    }
    console.log(usuario)
}
//ordem dos parametros
function novoUsuario(nome,  email, senha,tipo ="admin"){ //valor padrão deve vir no fim para facilitar
    const usuario ={
        nome ,
        email ,
        senha,
        tipo

    }
    console.log(usuario)
}

//criarUsuario("Matheus", "math@gmail.com", "1234")
//novoUsuario("Matheus", "math@gmail.com", "1234")


// Ao criarmos uma função com muitos parâmetros,
// uma boa prática é substituí-los por um objeto


/*DICAS
nas funções para facilitarr o codigo de receber manutenção

Quando temos uma função com muitos parametros devemos transformar ele em um objeto

*/
/*Jeito mais dificil de fazer manutenção, pois fica extenso e bagunçado em alguns casos*/
function muitosParametros(nome, telefone, endereco, aniversario, email, senha){
    //..
}


//transformar todos os parametros acima em um objeto
function objeto_como_parametro(usuario){
   usuario.nome
   usuario.telefone
   usuario.endereco
   usuario.aniversario
   usuario.email
   usuario.senha 
}

muitosParametros("nome", "telefone", "endereco", "aniversario", "email", "senha")

//e para chamar essa função acaba ficando muito mais facil

const dadosUsuario = {
    nome: "matheus",
    telefone: "1234",
    endereço: "rua 2131",
    aniversario: "0801",
    email: "math@gmai",
    senha: "carla8108"
}

objeto_como_parametro(dadosUsuario)

console.log(objeto_como_parametro[dadosUsuario])