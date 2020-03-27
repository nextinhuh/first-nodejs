//CONEXÃO COM O BANCO
const connection = require('../database/connection');

//CARREGA MÓDULO DO NODE PARA GERAR RANDOMBYTES
const crypto = require('crypto');

module.exports = {

    async index(request, response) {
        const ongs = await connection('ongs').select('*');
    
        return response.json(ongs);
    },


    async create(request, response){
        const { name, email, whatsapp, city, uf} = request.body;
        
        const id = crypto.randomBytes(4).toString('HEX'); //gera 4 bytes de dados hexadecimais para preencher o ID no banco
        
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })
        
        return response.json({id});
    }
}