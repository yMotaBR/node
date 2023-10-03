const fs = require('fs') // fs - file system

fs.readFile('jas.txt', 'utf8', (erro, dados) => {
    if(erro){
        return console.log(erro)
        
    }

    console.log(dados)
})
