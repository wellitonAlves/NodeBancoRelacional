const Sequelize = require('sequelize')
const sequelize = new Sequelize("node","welliton", "root",{
    host:"localhost",
    dialect:"mysql"
})

const Postagem = sequelize.define('postagens',{
    titulo:{
        type:Sequelize.STRING
    },
    conteudo:{
        type:Sequelize.TEXT
    }
})

const Usuario = sequelize.define('usuarios',{
    nome:{
        type:Sequelize.STRING
    },
    sobrenome:{
        type:Sequelize.STRING
    },
    idade:{
        type:Sequelize.INTEGER
    },
    email:{
        type:Sequelize.STRING
    }
})


//Postagem.sync({force:true})
//Usuario.sync({force:true})

Postagem.create({
    titulo:"Teste Titulo",
    conteudo:"teste conteudo"
})

Usuario.create({
    nome:"José",
    sobrenome:"welliton",
    idade:30,
    email:"jose@jose.com"
})

sequelize.authenticate().then(function(){
    console.log("Conecta com Sucesso")
}).catch(function(erro){
    console.log("Falha ao se conectar:"+erro)
})