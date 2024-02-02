document.getElementById('sessionBtn').addEventListener('click', function(){
    const input = document.getElementById('session')
    sessionStorage.setItem('info', input.value)
    input.value =''//limpar input
})
document.getElementById('readSession').addEventListener('click', function(){
    //vai pegar o setItem do sessionBTN acima
    const info = sessionStorage.getItem('info')
    alert(`A informação salva é: ${info}`)
})

document.getElementById('localBtn').addEventListener('click', function(){
    const input = document.getElementById('local')
    localStorage.setItem('localInfo',input.value)
    input.value = ''
})
document.getElementById('readLocal').addEventListener('click', function(){
    const localInfo = localStorage.getItem('localInfo')
    alert(`A informação salva no localStorage foi: ${localInfo}`)
})


document.getElementById('cookieBtn').addEventListener('click', function(){
    const input = document.getElementById('cookie')
    //cookieName = value; expires=UTCStringDate; path=/;
    const cookie = 'info='+input.value+ ';'
    const expiration = 'expires='+ new Date(2024,9,9)+ ';'
    const path = 'path=/;'
    document.cookie = cookie + expiration + path
    input.value = ''
    console.log(document.cookie)
})

document.getElementById('cookie2Btn').addEventListener('click', function(){
    const input = document.getElementById('cookie2')
    //cookie2Name = value; expires=UTCStringDate; path=/;
    const cookie = 'text='+input.value+ ';'
    const expiration = 'expires='+ new Date(2024,10,9)+ ';'
    const path = 'path=/;'
    document.cookie = cookie + expiration + path
    input.value = ''
    console.log(document.cookie)
})