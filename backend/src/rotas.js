const express = require("express");
const router = express.Router();
const pessoaController = require("./controller/pessoaController");

// Rota para enviar o formulário
router.post('/enviar-formulario', pessoaController.enviarFormulario);

// Rota para obter os cadastros antigos
/*router.get('/cadastros', pessoaController.obterCadastros);*/

module.exports = router;



// link do video do cara do youtube:
//https://youtu.be/p6oubMfuNto