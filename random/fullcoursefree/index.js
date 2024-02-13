
let username;
document.getElementById('button').onclick = function(){
    username = document.getElementById('myText').value
    document.getElementById('myH1').innerText = `Welcome, ${username}`
}