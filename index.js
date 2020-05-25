const express = require("express");
const app = express();
const handlebars = require("express-handlebars")
const Sequelize = require('sequelize')
const bodyParser = require('body-parser')

//conexão com o banco de dados mysql
const sequelize = new Sequelize("node","welliton", "root",{
    host:"localhost",
    dialect:"mysql"
})

//body parser
app.use(bodyParser.urlencoded({extends:false}))
app.use(bodyParser.json())

//config TemplateEngine
    app.engine("handlebars", handlebars({defaultLayout:"main"}))
    app.set("view engine", "handlebars")



    app.get("/cadastro", function(req,res){
        res.render('formulario')
    })


    app.post("/add", function(req,res){
        res.send("formulario recebido "+req.body.titulo +" conteudo: "+req.body.conteudo)
    })


app.listen(8081, function(){
    console.log("Servidor rodando na porta 8081")
})
