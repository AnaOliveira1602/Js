const mongoose = require("mongoose");

const PessoaModelSchema = new mongoose.Schema({
    Nome : String,
    CPF: String
});


module.exports = mongoose.model('Pessoa', PessoaModelSchema);