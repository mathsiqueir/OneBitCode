//acessar as variacoes mais facilmente sem precisar chamar o fetch toda hora, acaba pesando o sistema
let transactions = []
console.log(transactions)

function createTransactionContainer(id) {
    const container = document.createElement(`div`)
    container.classList.add(`transaction`)
    container.id = `transaction-${id}`
    return container
}
function createTransactionTitle(name) {
    const title = document.createElement(`span`)
    title.classList.add(`transaction-title`)
    title.textContent = name
    return title
}
function createTransactionAmount(amount) {
    //internacionalizacao $ dolar R$ real
    const span = document.createElement(`span`)
    //intl
    const formater = Intl.NumberFormat(`pt-BR`, {
        compactDisplay: `long`,
        currency: `BRL`,
        style: `currency`
    })
    const formatedAmount = formater.format(amount)

    if (amount > 0) {
        span.textContent = `➡️ ${formatedAmount} 🟢`
        span.classList.add(`credit`)
    } else {
        span.textContent = `➡️ ${formatedAmount} 🔴`
        span.classList.add(`debit`)
    }
    return span
}
function createEditTransactionBtn(transaction){
    const editBtn = document.createElement(`button`)
    editBtn.classList.add(`edit-btn`)
    editBtn.textContent = `Editar`
    editBtn.addEventListener(`click`, ()=>{
        document.querySelector(`#id`).value = transaction.id
        document.querySelector(`#name`).value = transaction.name
        document.querySelector(`#amount`).value = transaction.amount
    })
    return editBtn
}

function createDeleteTransactionBtn(id){
    const deleteBtn = document.createElement(`button`)
    deleteBtn.classList.add(`delete-btn`)
    deleteBtn.textContent = `Excluir`
    deleteBtn.addEventListener(`click`, async ()=>{
        await fetch(`http://localhost:3000/transactions/${id}`,{method: `DELETE`})
        deleteBtn.parentElement.remove()
        const indexToRemove = transactions.findIndex((t)=> t.id === id)
        transactions.splice(indexToRemove,1)
        updateBalance()
    })
    return deleteBtn
}

//agora vamos chamar as funcoes atraves de outra funcao
function renderTransaction(transaction) {
    const container = createTransactionContainer(transaction.id)
    const title = createTransactionTitle(transaction.name)
    const amount = createTransactionAmount(transaction.amount)
    const editBtn = createEditTransactionBtn(transaction)
    const deleteBtn = createDeleteTransactionBtn(transaction)
    //append - acrescentar
    container.append(title, amount, editBtn, deleteBtn)
    document.querySelector(`#transactions`).append(container)
}
//fetch para poder pegar as transacoes

async function fetchTransactions() {
    return await fetch('http://localhost:3000/transactions').then(res => res.json())
}
//vamos exibir o saldo, sempre vai ser chamada e vai calcular o saldo baseado no transac
function updateBalance() {
    const balanceSpan = document.querySelector(`#balance`)
    const balance = transactions.reduce((sum, transaction) => sum + transaction.amount, 0)
    const formater = Intl.NumberFormat(`pt-BR`, {
        compactDisplay: `long`,
        currency: `BRL`,
        style: `currency`
    })
    balanceSpan.textContent = formater.format(balance)
}

//chamar a funcao fetch quando a pagina for carregada
async function setup() {
    const results = await fetchTransactions()
    //agora vou criar um escopo global, que vai colocar dentr do arr transactions os results para facilitar a comunicacao com o backend
    transactions.push(...results)
    transactions.forEach(renderTransaction)
    updateBalance()
}


//criar uma nova transacao

async function saveTransaction(ev) {
    ev.preventDefault()
    //vamos implementar um id aqui para modificar o valor e nao adicionar um novo
    const id = document.querySelector(`#id`).value
    const name = document.querySelector(`#name`).value
    const amount = parseFloat(document.querySelector(`#amount`).value)
    if(id){
        //editar a transacao com o id
        const response = await fetch(`http://localhost:3000/transactions/${id}`, {
            method: 'PUT',
            body: JSON.stringify({name, amount}),
            headers: {
                'Content-Type': 'application/json'
            },
        })
        const transaction = await response.json()
        //agora eu preciso excluir e atualizar a resposta
        const indexToRemove = transactions.findIndex((t)=> t.id === id)
        
        transactions.splice(indexToRemove,1,transaction)
        document.querySelector(`#transaction-${id}`).remove()
        renderTransaction(transaction)
    }else{
        //criar nova transacao
        const response = await fetch('http://localhost:3000/transactions', {
        method: 'POST',
        body: JSON.stringify({name, amount}),
        headers: {
            'Content-Type': 'application/json'
        },
    })
    const transaction = await response.json()

    transactions.push(transaction)
    renderTransaction(transaction)
    }

    
    //target eh o proprio formulario
    ev.target.reset()
    //por fim vamos recalcular o saldo
    updateBalance()
}
document.addEventListener(`DOMContentLoaded`, setup)
document.querySelector(`form`).addEventListener(`submit`,saveTransaction)

