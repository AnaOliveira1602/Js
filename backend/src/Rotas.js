const express = require("express");
const rotas = express.Router();
const ClienteControler = require("./Controller/ClienteController");
const VendaControler = require("./Controller/VendaController")

rotas.get('/BancoCliente',ClienteControler.read);
rotas.post('/BancoCliente',ClienteControler.create);
rotas.delete('/BancoCliente/:id',ClienteControler.delete);
rotas.post('/BancoCliente/:id',ClienteControler.update);

rotas.get('/BancoVenda',VendaControler.read);
rotas.post('/BancoVenda', VendaControler.create);
rotas.delete('/BancoVenda/:id',VendaControler.delete);
rotas.post('/BancoVenda/:id',VendaControler.update);
module.exports = rotas;