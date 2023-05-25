const mongoose = require("mongoose");
const dbConfig = "mongodb://0.0.0.0:27017/Formulario"
//const dbConfig = "mongodb+srv://olivieana22:Agente007.@cluster0.vxuczuk.mongodb.net/Loja?retryWrites=true&w=majority";
const conexao = mongoose.connect(dbConfig,{
    useNewUrlParser:true,
    useUnifiedTopology: true
});

module.exports = conexao;