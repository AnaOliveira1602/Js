const Venda = require("../model/vendaModel");
const Cliente = require("../model/clienteModel");

module.exports = {

  async read (req,res){
    try{
      const listarVendas = await Venda.find();
      return res.json(listarVendas);;
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Nenhuma venda encontrada.' });
    }

    },
    
  async create (req, res) {
    try {
      const { cliente: Cliente, produto: Produto ,valor: Valor } = req.body;
      const clienteEncontrado = await Cliente.findById(Cliente);
      const venda = await Venda.create({ 
            
        cliente: clienteEncontrado._id,
        cpfCliente: clienteEncontrado.cpf,
        nomeCliente: clienteEncontrado.Nome,
        produto: Produto,
        valor: Valor
          
      });
        return res.json(venda);
        } catch (error) {
          console.error(error);
          res.status(500).json({ message: 'ID do cliente não encontrado.' });
        }
}, 

  async delete (req,res){
    try{
    const { id } = req.params;
    const vendaDeletada = await Venda.findOneAndDelete({_id : id});

  if(vendaDeletada){
    return res.json(vendaDeletada);
  }
}catch (error){
  console.error(error);
  res.status(500).json({message:'Venda não deletada. ID não foi encontrado.'})
}

},

  async update (req,res){
    try{
    const { id } = req.params;
    const {cliente, produto,valor} = req.body;
    const vendaAlterar = await Venda.findOne({_id:id});

      vendaAlterar.cliente = cliente;
      vendaAlterar.produto = produto;
      vendaAlterar.valor = valor;

      await vendaAlterar.save();
      return res.json(vendaAlterar);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Alteração não concluida, ID não encontrado.' });
    }


}
}