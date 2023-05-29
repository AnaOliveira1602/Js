const mongoose = require("mongoose");
//const dbConfig = "mongodb+srv://olivieana22:Agente007.@cluster0.vxuczuk.mongodb.net/anotacoes?retryWrites=true&w=majority";
const DbConfig = "mongodb://0.0.0.0:27017/BancoVendas";

const conexao = mongoose.connect(DbConfig,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports = conexao;