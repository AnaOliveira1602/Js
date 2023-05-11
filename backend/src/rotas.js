const express = require("express");
const rotas = express.Router();
const clienteController = require("./controller/clienteController");
const vendaController = require("./controller/vendaController")

rotas.get('/Cliente',clienteController.read);
rotas.post('/Cliente',clienteController.create);
rotas.delete('/Cliente/:id',clienteController.delete);
rotas.post('/Cliente/:id',clienteController.update);

rotas.get('/Venda',vendaController.read);
rotas.post('/Venda', vendaController.create);
rotas.delete('/Venda/:id',vendaController.delete);
rotas.post('/Venda/:id',vendaController.update);
module.exports = rotas;