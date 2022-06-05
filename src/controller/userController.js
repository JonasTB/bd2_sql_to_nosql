const Redis = require('../database/redisConfig');

module.exports = {
    create: async (req, res) => {
        const { id, nome, logradouro, numero, complemento, bairro, cidade, uf, cep, data_nascimento } = req.body;
        try {
            const user = {
                "nome": `${nome}`,
                "logradouro": `${logradouro}`,
                "numero": `${numero}`,
                "complemento": `${complemento}`,
                "bairro": `${bairro}`,
                "cidade": `${cidade}`,
                "uf": `${uf}`,
                "cep": `${cep}`,
                "data_nascimento": `${data_nascimento}`
            }
            const create = await Redis.setRedis(`id-${id}`, JSON.stringify(user));

            return res.status(201).json(create);
        } catch (err) {
            console.log(err);
            return res.status(400).json(err)
        }
    }
}