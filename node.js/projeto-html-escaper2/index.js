/*  


*/

const fs = require("node:fs")
const path = require("node:path")
const readline = require("node:readline")

//escapar caracteres especiais em html

function escapeHtmlSpecialCharacters(text){
    //modificar os caracteres diferentes  <replace>
    //caracteres dentro da expressao regular <>&
    return  text.replace(/[<>&]/g,(match)=>{
        switch(match){
            case '<':
                return "&lt;" //less than
            case '>':
                return "&gt;" //greater than
            case '&':
                return "&amp;"
            default:
                return match
        }
    })
}

console.log(escapeHtmlSpecialCharacters('<span>'))