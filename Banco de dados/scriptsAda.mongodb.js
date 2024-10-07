use('ada')
db.clientes.insertMany([
    {
        "_id": 1253456,
        "nomeCliente": "Álvaro",
        "telefone": "15991236399",
        "endereco": "Rua A, 123",
        "localizacao": {
            type: "Point",
            coordinates: [-46.625290, -23.533773]
        },
        "cnpj": "12.345.678/0001-01",
        "cep": "01001-000",
        "logradouro": "Praça da Sé",
        "complemento": "lado ímpar",
        "bairro": "Sé",
        "localidade": "São Paulo",
        "uf": "SP",
        "estado": "São Paulo",
        "ddd": "11",
        "usuario": {
            "email": "alvaro@example.com",
            "senha": "hash_senha_1",
            "tipoUsuario": "cliente",
            "telefone": "15991236399",
            "nomeCompleto": "Álvaro Berardo"
        }
    },
    {
        "_id": 456789,
        "nomeCliente": "Berenice",
        "telefone": "15990154677",
        "endereco": "Rua B, 456",
        "localizacao": {
            type: "Point",
            coordinates: [-46.625290, -23.533773]
        },
        "cnpj": "12.345.678/0001-02",
        "cep": "01001-000",
        "logradouro": "Praça da Sé",
        "complemento": "lado ímpar",
        "bairro": "Sé",
        "localidade": "São Paulo",
        "uf": "SP",
        "estado": "São Paulo",
        "ddd": "11",
        "usuario": {
            "email": "cliente2@example.com",
            "senha": "hash_senha_2",
            "tipoUsuario": "cliente",
            "telefone": "15990154677",
            "nomeCompleto": "Berenice Silva"
        }
    },
    {
        "_id": 467986,
        "nomeCliente": "Cláudio",
        "telefone": "15991356479",
        "endereco": "Rua C, 789",
        "localizacao": {
            type: "Point",
            coordinates: [-46.625290, -23.533773]
        },
        "cnpj": "12.345.678/0001-03",
        "cep": "01001-000",
        "logradouro": "Praça da Sé",
        "complemento": "lado ímpar",
        "bairro": "Sé",
        "localidade": "São Paulo",
        "uf": "SP",
        "estado": "São Paulo",
        "ddd": "11",
        "usuario": {
            "email": "cliente3@example.com",
            "senha": "hash_senha_3",
            "tipoUsuario": "cliente",
            "telefone": "15991356479",
            "nomeCompleto": "Cláudio Paulo"
        }
    },
    {
        "_id": 761254,
        "nomeCliente": "Dartanhan",
        "telefone": "1535694678",
        "endereco": "Rua D, 101",
        "localizacao": {
            type: "Point",
            coordinates: [-46.625290, -23.533773]
        },
        "cnpj": "12.345.678/0001-04",
        "cep": "01001-000",
        "logradouro": "Praça da Sé",
        "complemento": "lado ímpar",
        "bairro": "Sé",
        "localidade": "São Paulo",
        "uf": "SP",
        "estado": "São Paulo",
        "ddd": "11",
        "usuario": {
            "email": "cliente4@example.com",
            "senha": "hash_senha_4",
            "tipoUsuario": "cliente",
            "telefone": "1535694678",
            "nomeCompleto": "Dartanhan Leis"
        }
    },

    {
        "_id": 363625,
        "nomeCliente": "Ester",
        "telefone": "1546561378",
        "endereco": "Rua E, 202",
        "localizacao": {
            type: "Point",
            coordinates: [-46.625290, -23.533773]
        },
        "cnpj": "12.345.678/0001-05",
        "cep": "01001-000",
        "logradouro": "Praça da Sé",
        "complemento": "lado ímpar",
        "bairro": "Sé",
        "localidade": "São Paulo",
        "uf": "SP",
        "estado": "São Paulo",
        "ddd": "11",
        "usuario": {
            "email": "cliente5@example.com",
            "senha": "hash_senha_5",
            "tipoUsuario": "cliente",
            "telefone": "1546561378",
            "nomeCompleto": "Ester Favo"
        }
    }
]);

use('ada');
db.orcamentos.insertMany([
    {
        "_id": 123456, 
        "clienteId": 456789, 
        "validadeOrcamento": "2024-01-01",
        "dataCriacao": "2023-09-01",
        "valorTotal": 1500,
        "tipoServico": "Serviço A",
        "statusOrcamento": "Aprovado",
        "descricao": "Orçamento para serviço A",
        "emailVendedor": "vendedor1@example.com"
    },
    {
        "_id": 234567, 
        "clienteId": 467986, 
        "validadeOrcamento": "2024-02-01",
        "dataCriacao": "2023-08-15",
        "valorTotal": 2000,
        "tipoServico": "Serviço B",
        "statusOrcamento": "Pendente",
        "descricao": "Orçamento para serviço B",
        "emailVendedor": "vendedor2@example.com"
    },
    {
        "_id": 345678,  
        "clienteId": 761254, 
        "validadeOrcamento": "2024-03-01",
        "dataCriacao": "2023-07-20",
        "valorTotal": 2500,
        "tipoServico": "Serviço C",
        "statusOrcamento": "Rejeitado",
        "descricao": "Orçamento para serviço C",
        "emailVendedor": "vendedor3@example.com"
    },
    {
        "_id": 456789, 
        "clienteId": 363625, 
        "validadeOrcamento": "2024-04-01",
        "dataCriacao": "2023-06-15",
        "valorTotal": 3000,
        "tipoServico": "Serviço D",
        "statusOrcamento": "Aprovado",
        "descricao": "Orçamento para serviço D",
        "emailVendedor": "vendedor4@example.com"
    },
    {
        "_id": 567890,  
        "clienteId": 363625, 
        "validadeOrcamento": "2024-05-01",
        "dataCriacao": "2023-05-10",
        "valorTotal": 3500,
        "tipoServico": "Serviço E",
        "statusOrcamento": "Rejeitado",
        "descricao": "Orçamento para serviço E",
        "emailVendedor": "vendedor5@example.com"
    }
]);

use('ada')
db.funcionarios.insertMany([
    {
        "_id": 678901, 
        "nomeFuncionario": "Lucas Andrade Silva",
        "cep": "18010-000",
        "logradouro": "Avenida Dom Aguirre",
        "complemento": "lado par",
        "bairro": "Centro",
        "localidade": "Sorocaba",
        "uf": "SP",
        "estado": "São Paulo",
        "ddd": "15",
        "cargo": "Gerente",
        "idUsuario": 789012, 
        "chatBot": [
            {
                "id_chatbot": 890123, 
                "texto_chat": "Conversa inicial",
                "data": "2023-08-01"
            }
        ]
    },
    {
        "_id": 789012,  
        "nomeFuncionario": "Mariana Costa dos Santos",
        "cep": "18030-000",
        "logradouro": "Rua General Carneiro",
        "complemento": "próximo ao parque",
        "bairro": "Centro",
        "localidade": "Sorocaba",
        "uf": "SP",
        "estado": "São Paulo",
        "ddd": "15",
        "cargo": "Atendente",
        "idUsuario": 890123,  
        "chatBot": [
            {
                "id_chatbot": 901234, 
                "texto_chat": "Segunda conversa",
                "data": "2023-08-05"
            }
        ]
    }
]);

use('ada')
db.servicos.insertMany([
    {
        "_id": 901234, 
        "nome": "Serviço V",
        "valor": 1500,
        "tipoServico": "Venda"
    },
    {
        "_id": 101234,  
        "nome": "Serviço M",
        "valor": 2000,
        "tipoServico": "Manutenção"
    },
    {
        "_id": 111234,  
        "nome": "Serviço C",
        "valor": 2500,
        "tipoServico": "Consultoria"
    }
]);


//consulta servícos com valor superior a 500 reais
use('ada')
db.servicos.find({ valor: { $gt: 500 } });

use('ada')
db.clientes.find(
    { "usuario.email": "cliente@example.com" },
    { nomeCliente: 1, orcamentos: 1 }
);

//consulta servícos com valor superior a 1000 reais
use('ada')
db.clientes.find(
    {
        "orcamentos.valorTotal": { $gt: 1000 },
        "orcamentos.statusOrcamento": "Aprovado"
    },
    { nomeCliente: 1, orcamentos: 1 }
);


use('ada')
db.clientes.find(
    { nomeCliente: { $regex: /^N/ } },
    { nomeCliente: 1, telefone: 1 }
);


use('ada')
db.funcionarios.find(
    { cargo: "Cargo do Funcionário" },
    { nomeFuncionario: 1, cargo: 1 }
);


use('ada')
db.clientes.aggregate([
    {
        $lookup: {
            from: "servicos",
            localField: "orcamentos.tipoServico",
            foreignField: "tipoServico",
            as: "detalhesServicos"
        }
    },
    {
        $match: { "usuario.email": "cliente@example.com" }
    }
]);

use('ada')
db.funcionarios.aggregate([
    {
        $lookup: {
            from: "usuarios",
            localField: "idUsuario",
            foreignField: "_id",
            as: "detalhesUsuario"
        }
    }
]);

use('ada')
db.clientes.createIndex({ localizacao: "2dsphere" });
db.clientes.find({
    localizacao: {
        $near: {
            $geometry: {
                type: "Point",
                coordinates: [-46.625290, -23.533773]
            },
            $maxDistance: 5000  // Distância máxima em metros (5km)
        }
    }
});


use('ada');
db.clientes.find({
    localizacao: {
        $geoWithin: {
            $geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [-47.466020, -23.503419],  
                        [-47.455761, -23.501876],
                        [-47.455798, -23.496514],
                        [-47.457500, -23.451300],
                        [-46.633309, -23.550520],
                        [-47.466020, -23.503419]   
                    ]
                ]
            }
        }
    }
});
