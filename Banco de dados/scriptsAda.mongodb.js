use('ada')
db.clientes.insertMany([
    {
        "_id": ObjectId(),
        "nomeCliente": "Cliente 1",
        "telefone": "15991236399",
        "endereco": "Rua A, 123",
        "cnpj": "12.345.678/0001-01",
        "usuario": {
            "email": "cliente1@example.com",
            "senha": "hash_senha_1",
            "tipoUsuario": "cliente",
            "telefone": "15991236399",
            "nomeCompleto": "Cliente Um"
        },
        "orcamentos": [
            {
                "id": ObjectId(),
                "validadeOrcamento": "2024-01-01",
                "dataCriacao": "2023-09-01",
                "valorTotal": 1500,
                "tipoServico": "Serviço A",
                "statusOrcamento": "Aprovado",
                "descricao": "Orçamento para serviço A",
                "emailVendedor": "vendedor1@example.com"
            }
        ]
    },
    {
        "_id": ObjectId(),
        "nomeCliente": "Cliente 2",
        "telefone": "15990154677",
        "endereco": "Rua B, 456",
        "cnpj": "12.345.678/0001-02",
        "usuario": {
            "email": "cliente2@example.com",
            "senha": "hash_senha_2",
            "tipoUsuario": "cliente",
            "telefone": "15990154677",
            "nomeCompleto": "Cliente Dois"
        },
        "orcamentos": [
            {
                "id": ObjectId(),
                "validadeOrcamento": "2024-02-01",
                "dataCriacao": "2023-08-15",
                "valorTotal": 2000,
                "tipoServico": "Serviço B",
                "statusOrcamento": "Pendente",
                "descricao": "Orçamento para serviço B",
                "emailVendedor": "vendedor2@example.com"
            }
        ]
    },
    {
        "_id": ObjectId(),
        "nomeCliente": "Cliente 3",
        "telefone": "15991356479",
        "endereco": "Rua C, 789",
        "cnpj": "12.345.678/0001-03",
        "usuario": {
            "email": "cliente3@example.com",
            "senha": "hash_senha_3",
            "tipoUsuario": "cliente",
            "telefone": "15991356479",
            "nomeCompleto": "Cliente Três"
        },
        "orcamentos": [
            {
                "id": ObjectId(),
                "validadeOrcamento": "2024-03-01",
                "dataCriacao": "2023-07-20",
                "valorTotal": 2500,
                "tipoServico": "Serviço C",
                "statusOrcamento": "Rejeitado",
                "descricao": "Orçamento para serviço C",
                "emailVendedor": "vendedor3@example.com"
            }
        ]
    },
    {
        "_id": ObjectId(),
        "nomeCliente": "Cliente 4",
        "telefone": "1535694678",
        "endereco": "Rua D, 101",
        "cnpj": "12.345.678/0001-04",
        "usuario": {
            "email": "cliente4@example.com",
            "senha": "hash_senha_4",
            "tipoUsuario": "cliente",
            "telefone": "1535694678",
            "nomeCompleto": "Cliente Quatro"
        },
        "orcamentos": [
            {
                "id": ObjectId(),
                "validadeOrcamento": "2024-04-01",
                "dataCriacao": "2023-06-15",
                "valorTotal": 3000,
                "tipoServico": "Serviço D",
                "statusOrcamento": "Aprovado",
                "descricao": "Orçamento para serviço D",
                "emailVendedor": "vendedor4@example.com"
            }
        ]
    },
    {
        "_id": ObjectId(),
        "nomeCliente": "Cliente 5",
        "telefone": "1546561378",
        "endereco": "Rua E, 202",
        "cnpj": "12.345.678/0001-05",
        "usuario": {
            "email": "cliente5@example.com",
            "senha": "hash_senha_5",
            "tipoUsuario": "cliente",
            "telefone": "1546561378",
            "nomeCompleto": "Cliente Cinco"
        },
        "orcamentos": [
            {
                "id": ObjectId(),
                "validadeOrcamento": "2024-05-01",
                "dataCriacao": "2023-05-10",
                "valorTotal": 3500,
                "tipoServico": "Serviço E",
                "statusOrcamento": "Rejeitado",
                "descricao": "Orçamento para serviço E",
                "emailVendedor": "vendedor5@example.com"
            }
        ]
    }
]);


db.funcionarios.insertMany([
    {
        "_id": ObjectId(),
        "nomeFuncionario": "Funcionário 1",
        "endereco": "Avenida X, 100",
        "cargo": "Gerente",
        "idUsuario": ObjectId(),
        "chatBot": [
            {
                "id_chatbot": ObjectId(),
                "texto_chat": "Conversa inicial",
                "data": "2023-08-01"
            }
        ]
    },
    {
        "_id": ObjectId(),
        "nomeFuncionario": "Funcionário 2",
        "endereco": "Rua Y, 200",
        "cargo": "Atendente",
        "idUsuario": ObjectId(),
        "chatBot": [
            {
                "id_chatbot": ObjectId(),
                "texto_chat": "Segunda conversa",
                "data": "2023-08-05"
            }
        ]
    },
    {
        "_id": ObjectId(),
        "nomeFuncionario": "Funcionário 3",
        "endereco": "Travessa Z, 300",
        "cargo": "Supervisor",
        "idUsuario": ObjectId(),
        "chatBot": [
            {
                "id_chatbot": ObjectId(),
                "texto_chat": "Terceira conversa",
                "data": "2023-08-10"
            }
        ]
    },
    {
        "_id": ObjectId(),
        "nomeFuncionario": "Funcionário 4",
        "endereco": "Rua W, 400",
        "cargo": "Analista",
        "idUsuario": ObjectId(),
        "chatBot": [
            {
                "id_chatbot": ObjectId(),
                "texto_chat": "Quarta conversa",
                "data": "2023-08-15"
            }
        ]
    },
    {
        "_id": ObjectId(),
        "nomeFuncionario": "Funcionário 5",
        "endereco": "Rua Q, 500",
        "cargo": "Desenvolvedor",
        "idUsuario": ObjectId(),
        "chatBot": [
            {
                "id_chatbot": ObjectId(),
                "texto_chat": "Conversa final",
                "data": "2023-08-20"
            }
        ]
    }
]);


db.servicos.insertMany([
    {
        "_id": ObjectId(),
        "nome": "Serviço V",
        "valor": 1500,
        "tipoServico": "Venda"
    },
    {
        "_id": ObjectId(),
        "nome": "Serviço M",
        "valor": 2000,
        "tipoServico": "Manutenção"
    },
    {
        "_id": ObjectId(),
        "nome": "Serviço C",
        "valor": 2500,
        "tipoServico": "Consultoria"
    },
    {
        "_id": ObjectId(),
        "nome": "Serviço T",
        "valor": 3000,
        "tipoServico": "Treinamento"
    },
    {
        "_id": ObjectId(),
        "nome": "Serviço D",
        "valor": 3500,
        "tipoServico": "Desenvolvimento"
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
db.lojas.insertOne({
    "nomeLoja": "Loja X",
    "localizacao": {
        type: "Point",
        coordinates: [-46.625290, -23.533773]
    }
});

use('ada')
db.lojas.find({
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


use('ada')
db.lojas.find({
    localizacao: {
        $geoWithin: {
            $geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [-46.633309, -23.550520],
                        [-46.628796, -23.546678],
                        [-46.620839, -23.548999],
                        [-46.626310, -23.552060],
                        [-46.633309, -23.550520]
                    ]
                ]
            }
        }
    }
});
