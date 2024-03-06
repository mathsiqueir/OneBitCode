function PhoneNumber(PhoneNumberString){
    //ajustar a string, /aa/ expressao regular
    // /[\s]/ para retirar espacos e outros caracteres especiais
    const fixedString = PhoneNumberString.replace(/[\sa-zA-Z]/g,'')
    //dar um match com uma expressão regular
    this.countryCode = fixedString.match(/(?<=\+)\d{1,3}/)[0]
    //( ?<=\ *(* ) pegar termos depois do parenteses
    //(?=\)) *(* ) pegar termos antes do parenteses
    // \d+ número de termos que vai capturar
    // (/ ( ?<=\( p) \d+ ( ?=\) ) /) [0]
    this.ddd = fixedString.match(/(?<=\()\d+(?=\))/)[0] 
    this.number = fixedString.match(/(?<=\)).+/)[0].replace(/-/g,'')
    //para remover o traço  replace(/-/g,'')
}
console.log(new PhoneNumber('+55 (22) 9 2345-3412'))
console.log(new PhoneNumber('+55 (24) 9 9847-9650a2'))

