const Pessoa = require('../model/pessoaModel');

// Controlador para enviar o formulário
exports.enviarFormulario = (req, res) => {
  // Criar uma nova instância do modelo Formulario com os dados do req.body
  const novoFormulario = new Pessoa({
    nome: req.body.nome,
    CPF: req.body.CPF,
  });

  // Salvar o novo formulário no banco de dados
  novoFormulario.save((error) => {
    if (error) {
      console.error('Erro ao salvar o formulário:', error);
      res.status(500).send('Erro ao salvar o formulário.');
    } else {
      console.log('Formulário salvo com sucesso!');
      res.status(200).send('Formulário enviado com sucesso.');
    }
  });
};

/* Controlador para obter os cadastros antigos
exports.obterCadastros = (req, res) => {
    Formulario.find({}, (error, cadastros) => {
      if (error) {
        console.error('Erro ao obter os cadastros:', error);
        res.status(500).send('Erro ao obter os cadastros.');
      } else {
        res.json(cadastros);
      }
    });
  };*/
