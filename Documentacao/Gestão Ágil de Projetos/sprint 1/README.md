<span id="topo">

<h1 align="center">Sprint 1: 27/09/2024 a 05/10/2024</h1>

<p align="center">
    <a href="#objetivos">Objetivos da sprint</a> &nbsp |&nbsp &nbsp
    <a href="#entregas">Entregas</a> &nbsp |&nbsp &nbsp
    <a href="#links">Links úteis</a>
</p>

O desenvolvimento do site visa facilitar o trabalho do funcionário responsável pelo trabalho de compras foi desenvolvido, como um sistema de envio de solicitações de produtos e gerenciamento de solicitações. Tendo em mente o MVC, o primeiro sprint teve como objetivo desenvolver o cadastro e login de usuários, além de realizar a implementação inicial do Web Services de busca da Bolsa Eletrônica de Compras (BEC), utilizada para a pesquisa de produtos e integrada ao projeto com o objetivo de ajudar na exatidão dos pedidos realizados. Para isso, foram levantados e validados os requisitos e o protótipo, construindo serviços e interfaces visando uma entrega de grande valor condizente com a dor do cliente.

<span id="objetivos">

## :dart: Objetivos da Sprint

Os requisitos abrangidos por essa sprint são:
- **01:** Consultas Básicas
- **02:** Consultas Geoespaciais
- **03:** Atualizar o MER (Modelo Entidade-Relacionamento)
- **04:** Desenvolver API RESTful CRUD
- **05:** Hospedar a API no Vercel e Subir no GitHub
- **06:** Junções

<span id="entregas">

## :heavy_check_mark: Entregas

Para entregas da sprint, tivemos os artefatos SCRUM validados, como Backlog do Produto, Backlog das Sprints e User Stories, através de comunicação direta entre o P.O. e o cliente.

Para extrair e entender os desejos do cliente, foi construído um protótipo inicial no Figma, criando a identidade visual e design do sistema e apresentando para validação com o cliente, onde o resultado deste protótipo, escrito utilizando Angular e com a integração das funcionalidades acordadas para a primeira sprint pode ser observado a seguir:

<div align="center">

![demo](./demo.gif)

<div>

Este protótipo valida a entrega dos requisitos confirmados para a sprint, onde suas descrições podem ser checadas a seguir:

### 01 e 02: Consultar basicas e consultas geoespaciais

Realizar pelo menos 5 consultas utilizando os operadores do checklist.

Ex: encontrar todos os produtos com preço maior que X, listar todos os pedidos de um determinado usuário, etc.

Armazenamento: Armazene dados geográficos (por exemplo, a localização de lojas ou clientes) utilizando o tipo GeoJSON.

Consultas: Realize ao menos 2 consultas geospaciais para encontrar documentos dentro de um raio específico de um ponto ou dentro de um polígono. Por exemplo, encontrar todas as lojas em um raio de 5km de um determinado endereço, ou listar todos os clientes dentro de uma determinada cidade.

### 03: Atualizar o MER (Modelo Entidade-Relacionamento)

Este requisito se trata da atualização do MER, realizando todos os ajustes necessarios .

### 04 e 05: Desenvolver API RESTful CRUD e hospedar a API no Vercel e Subir no GitHub

Desenvolvimento uma API RESTful completa que permita a realização das operações básicas: GET, POST, PUT e DELETE. Cada operação deve ser mapeada para as rotas apropriadas no seu servidor.

Utilização da arquitetura MVC para desenvolvimento da aplicação.

Deverá conter obrigatoriamente um microsserviço.

Api documentada utilizando uma das ferramentas de documentação apresentadas em aula. Exemplo Postman ou Swagger.

A aplicação deverá ser hospedada no GitHub e ter sua documentação descrita no arquivo READMe. Não esqueça de incluir o nome dos integrantes do grupo.

Aplicação hospedada em nuvem, através do vercel

### 05: Junções

Utilizar o operador $lookup em pelo menos 2 consultas para realizar junções entre coleções e obter informações relacionadas. Por exemplo, encontrar os detalhes dos produtos de um pedido específico.

<details>
   <summary>Diagrama de classes</summary>
   <h4>Diagrama de classes mapeado do frontend</h4>
    
   ![image](https://github.com/paulovictorio/Documentacao_projetoCompras/assets/78160698/16ba36aa-3361-4ae2-bb36-3c48d4ffdd10)


    
</details>

→ [Voltar ao topo](#topo)

    
<span id="links">

## :link: Links úteis

- Repositório do projeto: [Projeto de compras](https://github.com/thiago-diegoli/Projeto-MVC-RESTful)
- Site do projeto: [https://projeto-mvc-restful-frontend.vercel.app](https://projeto-mvc-restful-frontend.vercel.app) (usuário exemplo - email: `usuario@email.com`, senha: `senha123`)
- Voltar ao [documento principal](https://github.com/paulovictorio/Documentacao_projetoCompras/blob/main/README.md)
