const express = require("express");
const app = express();

app.get("/", function(req,res){
    res.send("bem vindo a palicacao");
})

app.get("/sobre", function(req,res){
    res.send("Minha pagina sobre");
})


app.get("/blog", function(req,res){
    res.send("bem vindo ao blog");
})


app.get("/ola/:nome/:cargo", function(req,res){
    res.send("<h1>Ola "+req.params.nome+"</h1>"+"<h1>cargo de: "+req.params.cargo+"</h1>");
})

app.listen(8081, function(){
    console.log("Servidor rodando na porta 8081")
})

