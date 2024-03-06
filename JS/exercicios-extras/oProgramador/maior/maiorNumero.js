let numbers = []
const sum = prompt('quantos números você deseja colocar para sortir?')
for (let i = 1; i <= sum; i++) {
    const number = prompt(`digite o ${i}º numero: `)
    numbers.push(number)
    
}
const sorted = numbers.sort((a, b) => b - a)

alert(`o maior número é o ${sorted[0]}`)