let sum = 0

function fibonacci() {
    for (let i = 0; i < 100; i++) {
        sum += (i - 1) + i
        console.log(sum)
    }
}
