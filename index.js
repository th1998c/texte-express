const express = require("express") // importando o express
const app  = express() // iniciando o express
//criando rota home
app.get("/",function(req, res){
    res.send('<h1>home</h1>')
})
//rota blog
app.get("/blog/:artigo?",function(req, res){
    let artigo = req.params.artigo
    if(artigo){
        res.send('<h1>Artigo: '+artigo+'</h1>')
    }else{
        res.send('Bem vindo ao blog ')
    }
    
})
//rota canal youtube
app.get("/canal/youtube",function(req,res){
    let canal = req.query["canal"]
    if(canal){
        res.send(canal)    
    }else{
        res.send('canal não informado')
    }
    
})

app.get("/ola/:nome/:empresa",function(req,res){
    let nome = req.params.nome
    let empresa = req.params.empresa
    res.send('Olá '+nome+' que trabalha na em '+empresa)
})

//abrindo servidor
app.listen(4000,function(erro){
    if(erro){
        console.log('ocorreu um erro!')
    }
    else{
        console.log('servidor iniciado com sucesso')
    }
})