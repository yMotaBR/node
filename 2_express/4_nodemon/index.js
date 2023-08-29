const express = require('express')
const app = express()

const path = require('path')

const caminho = path.join(__dirname, 'templates')
app.get('/', (requisicao, resposta) => {
    resposta.sendFile(`${caminho}/index.html`)
})
app.listen(7777)