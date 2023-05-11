const mongoose = require("mongoose");

const ClienteModelSchema = new mongoose.Schema({
    Nome : String,
    CPF: String,
    Email: String,
    Telefone: String,
    Fidelidade: Boolean

});


module.exports = mongoose.model('Cliente', ClienteModelSchema);