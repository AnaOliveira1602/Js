const Cliente = require("../model/clienteModel");

module.exports = {

    async read (req ,res){
        try{

        
            const clienteList = await Cliente.find();
            return res.json(clienteList);
        }catch (err){
            return res.status(400).send({error: 'Nenhum cliente encontrado'})
        }

    },

    async create (req ,res){

    try{
        const {nome,cpf,email,telefone,fidelidade} = req.body;
        const clienteCreate = await Cliente.create({
            Nome: nome,
            CPF: cpf,
            Email: email,
            Telefone: telefone, 
            Fidelidade: fidelidade
        });
        return res.json(clienteCreate);
    }catch (err){
        return res.status(400).send({error: 'Error ao criar cliente.'})
    }


    },

    async delete (req ,res){
        try{
        const { id } = req.params;
        const clienteDelete = await Cliente.findOneAndDelete({ _id:id});

        if(clienteDelete){
            return res.json(clienteDelete);
        }
    }catch (err){
        return res.status(400).send({error: 'Usuario não encontrado!!!'})
    }

    },

    async update (req, res){
        try{
        const { id } = req.params;
        const {nome,cpf,email,telefone,fidelidade} = req.body;
        const clienteUpdate = await Cliente.findOne({ _id:id});

            clienteUpdate.Nome = nome;
            clienteUpdate.CPF = cpf;
            clienteUpdate.Email = email;
            clienteUpdate.Telefone = telefone;
            clienteUpdate.Fidelidade = fidelidade;

        await clienteUpdate.save();
    return res.json(clienteUpdate);
}catch (err){
    return res.status(400).send({error: 'Alteração não concluida, ID não encontrado.'})
}
}

};