const express = require('express');
const app = express();
const porta = 3000; 

app.get('/cadastro/', (req, res) => {
    res.send('Olá, seja bem vindo! Por favor, informe seu nome:')
}
)

app.get('/cadastro/', (req, res) => {
    req.params;
    res.send(`Seu nome: ${req.params.nome}`);
}
)

app.get('/cadastro/:idade', (req, res) => {
req.params;
res.send(`Qual sua idade?: ${req.params.idade}`);

    // res.send('Terceira Rota')
}
)

app.get('/cadastro/:curso', (req, res) => {
    req.params;
    res.send(`Qual seu curso?: ${req.params.curso}`);
    
        // res.send('Terceira Rota')
    }
    )

app.listen(porta, () => {
    console.log(`Servidor Inicializado com Sucesso. Porta: ${porta}`)
})