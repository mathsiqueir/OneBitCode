const entrada1 = prompt("Informe o primeiro número")
const entrada2 = prompt("Informe o segundo número")

const x = parseFloat(entrada1)
const y = parseFloat(entrada2)

const soma  = x + y
const sub   = x -  y
const div   = x / y
const mult  = x * y

document.write(soma)
document.write(sub)
document.write(div)
document.write(mult)

alert("Resultado:\n soma: "+soma+
"\nsubtração: "+sub+
"\ndivisão: "+div+
"\nmultiplicação "+mult
)