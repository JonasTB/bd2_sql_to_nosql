const Redis = require('../database/redisConfig');

module.exports = {
    create: async (req, res) => {
        // const { id, nome, logradouro, numero, complemento, bairro, cidade, uf, cep, data_nascimento } = req.body;
        const { id } = req.body;
        try {
            // const user = {
            //     "nome": `${nome}`,
            //     "logradouro": `${logradouro}`,
            //     "numero": `${numero}`,
            //     "complemento": `${complemento}`,
            //     "bairro": `${bairro}`,
            //     "cidade": `${cidade}`,
            //     "uf": `${uf}`,
            //     "cep": `${cep}`,
            //     "data_nascimento": `${data_nascimento}`
            // }
            const create = await Redis.setRedis(id, JSON.stringify(req.body));

            return res.status(201).json(create);
        } catch (err) {
            console.log(err);
            return res.status(400).json(err)
        }
    },
    getKey: async(req, res) => {
        const { id } = req.query;
        try {
            const key = JSON.parse(await Redis.getRedis(id));
            console.log(key.nome)
            return res.status(200).json(key);
        } catch (err) {
            return res.status(400).json(err)
        }
    }
}