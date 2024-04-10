//não queremos que o ts fique reclamando de alguma tipagem
//tipos opcionais,

function sendSpaceship(spaceship:{pilot:string, copilot?:string}) {
    //..
}

//dois tipos como declarado na função
sendSpaceship({pilot: 'Siqueira',copilot:'Chewbacca'})

//não está correto, pois copiloto é obrigatório, para deixar de ser obrigatório utiliza-se  ' ? '
sendSpaceship({pilot:'Matheus'})

//outra forma
//tipo desconhecido 
let input: unknown

input = 'test'
input = 20
input = []

//input não pode ser atribuido
let text:string


//o typeScript para de funcionar no seu código, não da erro é como se tivesse utilizando o javaScript

let input1: any

input1 = 'test'
input1 = 20
input1 = []



