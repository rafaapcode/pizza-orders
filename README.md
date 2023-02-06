# Pizzas

## Sobre
- Este é um desafio retirado de um repostório com vários desafios usados em processos seletivos. 
- Realizei este desafio com o intuito de praticar meu conhecimentos.
- Este desafio se constitui em criar aluns endpoints, que simulem uma operação dentro de uma pizzaria.

## Tecnologias
- Express
- Prisma
- Mysql

### Funcionalidades
- [x] Criar um pizza
- [x] Pegar todas as pizzas
- [x] Deletar uma pizzas
- [x] Criar uma ordem
- [x] Pegar todas as ordens
- [x] Pegar somente uma ordem.

## Endpoints
```POST - /api/pizzas``` -> Cria uma pizza

    json```
    {
	    "name": "calabresa",
	    "price": 45,
	    "ingredients": ["tomate", "calabresa", "cebola"]
    } 
    ```

```GET - /api/pizzas``` -> Retorna todas as pizzas
```DELETE - /api/pizzas/:id``` -> Deleta uma pizza


```POST - /api/orders``` -> Cria uma ordem

    json```
    {
	    "name": "calabresa",
	    "quantity": 3
    }
    ``` 

```GET - /api/orders``` -> Retorna todas as orderns
```GET - /api/orders/:id``` -> Deleta uma ordem


## Como usar

- Primeiramente faça o download do repositório e abra a pasta em um editor de código.
- Depois instale as dependências necessarias, executando o seguinte código dentro da pasta do repositório :
    ```npm i```

- Depois de instalar não se esqueça de criar um arquivo .env com o link do seu banco de dados Mysql.
    ```DATABASE_URL="mysql://user:pass@localhost:3306/dbname"```

- Após colocar o link do seu banco de dados, execute os seguintes comando para criar uma migration :
    ``` npx prisma generate ```
    ``` npx prisma migrate dev ```

- Após a configuração do banco de dados, você pode iniciar a API e usá-la com o seguinte comando :
    ```npm start```