const express = require("express");

const app = express();

//http://localhost:3000/exercicio1/?num1=0&num2=3
app.get("/exercicio1/", (req, res)=> {
    const num1 = req.query.num1
    const num2 = req.query.num2

    const resultado = Number(num1) + Number(num2);
    // const id = req.params.id
    // // http://localhost:3000/
    // console.log ("Hello World!")
    // //Tudo que for pra 'res' vai pro usuario
     res.json({message:resultado })
})

app.listen(3000,() => {
    console.log ("Servidor está rodando na porta 3000");   
})