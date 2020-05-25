const express = require("express");
const app = express();
const handlebars = require("express-handlebars")
const Sequelize = require('sequelize')

//conexão com o banco de dados mysql
const sequelize = new Sequelize("node","welliton", "root",{
    host:"localhost",
    dialect:"mysql"
})


//config TemplateEngine
    app.engine("handlebars", handlebars({defaultLayout:"main"}))
    app.set("view engine", "handlebars")

app.listen(8081, function(){
    console.log("Servidor rodando na porta 8081")
})
