const fs = require('node:fs')


fs.unlink('newFile.txt',(err)=>{
    if(err) throw err
    console.log('arquivo apagado com sucesso')
})