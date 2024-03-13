// ...

async function saveTransaction(ev) {
    ev.preventDefault()
    const name = document.querySelector('#name').value
    const amount = parseFloat(document.querySelector('#amount').value)
  
    const response = await fetch('http://localhost:3000/transactions', {
      method: 'POST',
      body: JSON.stringify({ name, amount }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const transaction = await response.json()
    transactions.push(transaction)
    renderTransaction(transaction)
  
    ev.target.reset()
    updateBalance()
  }
  
  // ...
  
  document.addEventListener('DOMContentLoaded', setup)
  document.querySelector('form').addEventListener('submit', saveTransaction)