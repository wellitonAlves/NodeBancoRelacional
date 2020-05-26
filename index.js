const express = require("express");
const app = express();
const handlebars = require("express-handlebars")
const bodyParser = require("body-parser")
const Post = require("./models/Post")


//body parser
app.use(bodyParser.urlencoded({extends:false}))
app.use(bodyParser.json())

//config TemplateEngine
    app.engine("handlebars", handlebars({defaultLayout:"main"}))
    app.set("view engine", "handlebars")



    app.get("/", function(req,res){
        Post.findAll().then(function(posts){
            res.render('home',{posts: posts})
        })

    })

    app.get("/deletar/:id", function(req,res){
        Post.destroy({where:{'id':req.params.id}}).then(function(){
            res.send("Postagem deletada com sucesso!")
        }).catch(function(erro){
            res.send("Essa postagem não existe!")
        })
    })



    app.get("/cadastro", function(req,res){
        res.render('formulario')
    })


    app.post("/add", function(req,res){

        Post.create({
            titulo:req.body.titulo,
            conteudo: req.body.conteudo
        }).then(function(){
            res.redirect("/")
        }).catch(function(erro){
            res.send("Houve um erro: "+erro)
        })
    })


app.listen(8081, function(){
    console.log("Servidor rodando na porta 8081")
})
