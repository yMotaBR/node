const express = require('express')
const app = express()
app.get('/', (requisicao, resposta) => {
    resposta.send('imenso da bosta')
})

app.listen(7777, () => {
    console.log('app do rodando na porta 7777')
})