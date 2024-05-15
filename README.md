# Teste - Brain Agriculture

## Tecnologias:

- #### Linguagem: TypeScript

- ExpressJS
- TypeORM
- PostgreSQL
- Docker

## Instalação

Para baixar as dependências do projeto apenas rode o comando:

    $ npm install
    $ yarn

## Rodando o App

**Docker** : Para iniciar o app utilizando docker, use o comando:

    $ docker-compose up -d

**Local** : Para iniciar o app localmente, seguir os passos:
  - Configure o arquivo ormconfig.json com os parêmetros adequados de acesso do banco dados PostgreSQL local ou dockerizado
  - Executar o seguinte comando conforme configurado no arquivo package.json
    `$ npm run start` ou `$ npm run dev`

## Testes Unitários 

Para execução dos testes unitários, utilizar o comando: 

    $ npm run test

## Rotas
Path                                | Método |  Descrição
------------------------------------ | ------  | -----
/api/produtor-rural  |  GET   |  Todos os Produtores Rurais
/api/produtor-rural/:id  |  GET   |  Produtor Rural via ID
/api/produtor-rural  |  POST   |  Insere um Produtor Rural
/api/produtor-rural/:id  |  PATCH   |  Atualiza um Produtor Rural via ID
/api/produtor-rural/:id  |  DELETE   |  Exclui um Produtor Rural via ID
/api/area/total  |  GET   |  Área total de todos os Produtores Rurais
/api/area/estado  |  GET   |  Área somada por estados
/api/area/cultura  |  GET   |  Área somada por culturas



## API

### GET:: /api/produtor-rural
#### response.body:
```json
{
    "status": "success",
    "response": [
        {
            "id": 1,
            "cpf_cnpj": "12861889039",
            "nome": "John Doe",
            "nome_fazenda": "Meu Sítio",
            "cidade": "Minha Cidade",
            "estado": "ME",
            "area_total": "543.321",
            "area_agricultavel": "54.32",
            "area_vegetacao": "45.67",
            "culturas_plantadas": [
                "Cultura1",
                "Cultura2"
            ]
        },
        {
            "id": 2,
            "cpf_cnpj": "11143803000",
            "nome": "Jane Doe",
            "nome_fazenda": "Outra Fazenda",
            "cidade": "Outra Cidade",
            "estado": "OE",
            "area_total": "254.324",
            "area_agricultavel": "24.23",
            "area_vegetacao": "110.42",
            "culturas_plantadas": [
                "Cultura1",
                "Cultura2"
            ]
        }
    ]
}
```
### GET:: /api/produtor-rural/:id
#### response.body:
```json
{
    "status": "success",
    "response": {
        "id": 1,
        "cpf_cnpj": "12861889039",
        "nome": "John Doe",
        "nome_fazenda": "Meu Sítio",
        "cidade": "Minha Cidade",
        "estado": "ME",
        "area_total": "543.321",
        "area_agricultavel": "54.32",
        "area_vegetacao": "45.67",
        "culturas_plantadas": [
            "Cultura1",
            "Cultura2"
        ]
    }
}
```
### POST:: /api/produtor-rural
#### request.body:
```json
{
    "cpf_cnpj" : "12861889039",
    "nome": "John Doe",
    "nome_fazenda" : "Meu Sítio",
    "cidade": "Minha Cidade",
    "estado": "ME",
    "area_total" : 543.321,
    "area_agricultavel" : 54.32,
    "area_vegetacao" : 45.67,
    "culturas_plantadas" : ["Cultura1","Cultura2"]
}
```
#### response.body :
```json
{
    "status": "success",
    "response": {
        "cpf_cnpj": "12861889039",
        "nome": "John Doe",
        "nome_fazenda": "Meu Sítio",
        "cidade": "Minha Cidade",
        "estado": "ME",
        "area_total": 543.321,
        "area_agricultavel": 54.32,
        "area_vegetacao": 45.67,
        "culturas_plantadas": [
            "Cultura1",
            "Cultura2"
        ],
        "id": 1
    }
}
```
### PATCH:: /api/produtor-rural/:id
#### request.body:
```json
{
    "nome": "John Doe",
    "nome_fazenda": "Meu Sítio",
    "cidade": "Minha Cidade",
    "estado": "ME",
    "area_total": "543.321",
    "area_agricultavel": "40.32",
    "area_vegetacao": "45.67",
    "culturas_plantadas": [
        "Cultura1",
        "Cultura2"
    ]
}
```
#### response.body:
```json
{
    "status": "success",
    "response": {
        "id": 1,
        "cpf_cnpj": "12861889039",
        "nome": "John Doe",
        "nome_fazenda": "Meu Sítio",
        "cidade": "Minha Cidade",
        "estado": "ME",
        "area_total": "543.321",
        "area_agricultavel": "40.32",
        "area_vegetacao": "45.67",
        "culturas_plantadas": [
            "Cultura1",
            "Cultura2"
        ]
    }
}
```
### GET:: /api/area/total
#### response.body:
```json
{
    "status": "success",
    "response": {
        "quantidadeRegistros": "2",
        "quantidadearea_total": "340.468"
    }
}
```
### GET:: /api/area/estado
#### response.body:
```json
{
    "status": "success",
    "response": [
        {
            "estado": "ME",
            "somaarea_total": "543.321"
        },
        {
            "estado": "OE",
            "somaarea_total": "254.324"
        }
    ]
}
```
### GET:: /api/area/cultura
#### response.body:
```json
{
    "status": "success",
    "response": [
        {
            "culturas_plantadas": "Cultura2",
            "somaarea_totalporcultura": "340.468"
        },
        {
            "culturas_plantadas": "Cultura1",
            "somaarea_totalporcultura": "254.324"
        },
        {
            "culturas_plantadas": "Cultura1",
            "somaarea_totalporcultura": "543.321"
        }
    ]
}
```
