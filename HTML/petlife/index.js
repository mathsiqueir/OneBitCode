var elementosDuvida = document.querySelectorAll('.duvida')

/*a funçãoo é montada mais ou menos assim
function nome(argumento){
    //código a ser executado

}
*/
/*elementosDuvida.forEach(function(duvida){ /*for each = para cada*/ 
/*vai receber uma função e cada função vai receber uma duvida*/ 
   /* duvida.classList.add('fundo-verde')
    adicionará a classe duvida uma outra classe com o nome de fundo verde que é possivel definir uma função para ela no CSS*/ 

   /* duvida.addEventListener('click', function(){ /*para cada elemento de duvida vai se adicionar um elemento de click, 
    no caso quando eu clicar ele vai executar o comando */
   
        
     /*adicionar ouvidor de eventos que o javascript vai monitorar*/

elementosDuvida.forEach(function(duvida){
    duvida.addEventListener('click', function (){
        duvida.classList.toggle('ativa') //toggle = trocar
    })
})









//elementosDuvida.forEach(function(duvida){ /*for each = para cada*/ 
/*vai receber uma função e cada função vai receber uma duvida*/ 
   /* duvida.classList.add('fundo-verde')
    adicionará a classe duvida uma outra classe com o nome de fundo verde que é possivel definir uma função para ela no CSS*/ 

   /* duvida.addEventListener('click', function(){ /*para cada elemento de duvida vai se adicionar um elemento de click, 
    no caso quando eu clicar ele vai executar o comando 
    que está abaixo e vai adicionar a classe duvida outra classe o fundo-verde */
 /*       duvida.classList.add('fundo-verde')
    }) /*adicionar ouvidor de eventos que o javascript vai monitorar*/
//}) 