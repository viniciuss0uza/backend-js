//criando api back-end em node!!
const express = require('express');

const app = express();

//Comando para executar terminal: node .\index.js
app.get("/exercicio1/", (req, res)=> {
    //http://localhost:3000/exercicio1/?num1=0&num2=3

    const num1 = req.query.num1
    const num2 = req.query.num2

    const resultado = Number(num1) + Number(num2);
    // const id = req.params.id
    // // http://localhost:3000/
    // console.log ("Hello World!")
    // //Tudo que for pra 'res' vai pro usuario
     res.json({ message:resultado })
});

app.get("/exercicio2/", (req, res)=> {
    //http://localhost:3000/exercicio2/?valorHora=20&horasTrabalhadas=160

    const valorHora = req.query.valorHora;
    const hrsTrabalhadas = req.query.horasTrabalhadas;
    console.log(req.query)

    const salario = valorHora * hrsTrabalhadas;

    res.json({ message:salario })  
    // res.json({ info {}, results: [{}] })  
    //res.status - status de retorno
    //res.json() - envio do retorno
});

app.get("/exercicio3/", (req, res)=> {


    const pessoas = req.query.pesos;
    // const num1 = req.query.num1
    // const num2 = req.query.num2
    // const num3 = req.query.num3
    // const num4 = req.query.num4
    // const num5 = req.query.num5

    // const resultado = Number(num1) + Number(num2) + Number(num3) + Number(num4) + Number(num5);

    // const pesoMedio 
    
});

app.listen(3000, () => {
    console.log ("Servidor está rodando na porta 3000");   
});


//----Exemplo exercicio 3----
// const express = require('express');
// const app = express();

// // Rota para receber os pesos e calcular a média
// app.get("/calcular-media", (req, res) => {
//     const pesos = req.query.pesos; // Recebe os pesos como uma string separada por vírgulas
//     const pesosArray = pesos.split(',').map(Number); // Converte a string em um array de números

//     // Calcula a média dos pesos
//     const somaPesos = pesosArray.reduce((acc, peso) => acc + peso, 0);
//     const media = somaPesos / pesosArray.length;

//     res.json({ media: media });
// });

// app.listen(3000, () => {
//     console.log("Servidor está rodando na porta 3000");
// });
