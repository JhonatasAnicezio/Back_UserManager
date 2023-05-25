# Projeto Back User Manager

[![NPM](https://img.shields.io/bower/l/api)](https://github.com/JhonatasAnicezio/Back_UserManager/blob/main/LICENSE)

### Olá seja bem vindo ao Back User Manager!

Este é um projeto simples de gerenciamento de usuários em uma API RESTfull desenvolvido em TypeScript utilizando o Sequelize ORM e MySQL como banco de dados. A arquitetura adotada foi a MSC (Model-Service-Controller), onde as responsabilidades foram divididas em módulos distintos, tornando o projeto organizado e escalável.

As rotas disponíveis na API incluem cadastro de usuário, login de usuário e admin, atualização de informações do usuário e deleção de usuário (somente para administradores). Este projeto foi desenvolvido com o intuito de servir como exemplo para estudos e aprendizado sobre desenvolvimento de APIs em TypeScript com banco de dados MySQL.

## Tecnologias utilizadas:
  - TypeScript
  - Squelize
  - Arquitetura MSC
  - Docker/Docker-Compose
  
## Como rodar o projeto:
Pré-requisitos: Node ^16.14
or
Docker/Docker-Compose

```bash
# clonar repositório
git clone https://github.com/JhonatasAnicezio/Back_UserManager.git

# entrar na pasta do projeto
cd Back_UserManager
```
### !! Atenção !!
O projeto possui dependência do Docker e do Docker Compose. Se você ainda não possui o Docker instalado e configurado em sua máquina, é extremamente importante instalá-lo antes de executar o projeto. Caso ainda não esteja familiarizado com o Docker, você pode conferir a documentação em: https://docs.docker.com/compose/.

```bash
# em seu arquivo raiz execute o comando docker-compose up
docker-compose up -d

# em seguida entre dentro do container app_backend e execute o comando db:reset
docker exec -it app_backend sh

npm run db:reset

# e por fim executar o projeto
npm start
```

## Fluxo 1: Usuarios Comuns
-  !! Atenção !! Todas as regras de negócio refeerentes a permissão deverão ser realizados no seu front-end. Por isso o usuario pode se cadastrar com a role que quiser!
<details>
  <summary><strong> Login(POST): /user/login </strong></summary>
  
  - Para a realização do login deve se passar os seguintes dados dentro do body:

```json
  {
    "email": "user@user.com",
    "password": "secret_user"
  },
```
  se todas as informações estiverem corretas será retornado um token:
  
```json
  {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7InBheWxvYWQiOnsiaWQiOjIsIm5hbWUiOiJVc2VyIiwiZW1haWwiOiJ1c2VyQHVzZXIuY29tIiwicGFzc3dvcmQiOiIkMmEkMDgkWThBYmk4alh2c1h5cW0ucm1wMEIudVFCQTVxVXo3VDZHaGxnL0N2VnIvZ0x4WWo1VUFaVk8iLCJyb2xlIjoidXNlciJ9fSwiaWF0IjoxNjgzNjU2MjkyLCJleHAiOjE2ODM5MTU0OTJ9.4JlOZRUbK8Dw9Sn0RewMqgpJcR0DyyQ0E2WHZqPxgok"
  },
```
</details>

<details>
  <summary><strong> Register(POST): /user </strong></summary>

  - Para a realização do cadastro deve se passar os seguintes dados dentro do body:

```json
  {
    "email": "mi@fernands.com",
    "password": "mi123456",
    "name": "milena fernands",
    "role": "user"
  }
```
  se todas as informações estiverem corretas será retornado um token referente ao novo usuario cadastrado:
  
```json
  {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7InBheWxvYWQiOnsiaWQiOjMsIm5hbWUiOiJtaWxlbmEgZmVybmFuZHMiLCJlbWFpbCI6Im1pQGZlcm5hbmRzLmNvbSIsInBhc3N3b3JkIjoiJDJhJDA4JDVYSTlTczJjc2tWVkxlMG9YZjM0YnVGUkZkN3E5WXNoMlkwWURFbnB1VEV6TFhKSm1RbGJtIiwicm9sZSI6InVzZXIifX0sImlhdCI6MTY4MzY1NzAwNSwiZXhwIjoxNjgzOTE2MjA1fQ.CtOv56mk3nxlZNnExKYID-mtE80OcBmZYaRYCAzq7Wk"
  },
```
</details>

<details>
  <summary><strong> Find user actual(GET): /user/me </strong></summary>

  - Essa rota serve para fazer uma atualização do usuario que já esta logado, por isso é necessario passar um token no header:

  se o token for valido, ele ira retornar o usuario do banco de dados, assim garantindo que as informações estejam atuais:
  
```json
{
  "id": 1,
  "name": "Zé Admin",
  "email": "ze@admin.com",
  "role": "admin"
},
```
</details>

## Fluxo 2: Administradores
-  !! Atenção !! As rotas a seguir são referentes apenas aos administradores, por tanto é necessario que se passe um token dentro do header da requisição com o nome de authorization

<details>
  <summary><strong> Get users(GET): /user </strong></summary>
  
  retorno da requisição
  
```json
{
  "users": [
    {
      "id": 2,
      "name": "jhonatas anicezio",
      "email": "jhonatas@anicezio.com",
      "role": "user"
    },
    {
      "id": 3,
      "name": "milena fernands",
      "email": "mi@fernands.com",
      "role": "user"
    }
  ]
}
```
</details>

<details>
  <summary><strong> Update role(PUT): /user/:id </strong></summary>

  - Para a realização do cadastro deve se passar o parametro id do usuario que você quer alterar, e passar o novo cargo pelo body:

```json
  {
    "role": "admin"
  },
```
  
  se todas as informações estiverem corretas será retornado uma mensagem de sucesso:
  
```json
{
  "message": "successfully updated"
},
```
</details>

<details>
  <summary><strong> Delete user(DELETE): /user/:id </strong></summary>

  - Para remover um usuario deve se passar o seu id pelo parametro do endpoint:
  
  Esta operação não possui um retorno em json
</details>

<details>
  <summary><strong> Create user(POST): /user/admin </strong></summary>

  - Para criar um novo usuario você deve passar os mesmos valores que passa para o cadastro, porém tera um retorno diferente:
  
  ```json
  {
    "email": "mi@fernands.com",
    "password": "mi123456",
    "name": "milena fernands",
    "role": "moderator"
  }
```
  se todas as informações estiverem corretas será retornado um token referente ao novo usuario cadastrado:
  
```json
    "Created"
```
</details>

<details>
  <summary><strong> Update role(PUT): /user/:id </strong></summary>

  - Para atualizar a role, basta passar o id no path, e a role no body como no exemplo a baixo :
  
  ```json
{
  "role": "admin"
}
```
  se todas as informações estiverem corretas será retornado uma mensagem de sucesso:
  
```json
{
  "message": "successfully updated"
}
```
</details>


# Autor

Jhonatas Anicezio Segismundo

https://www.linkedin.com/in/jhonatas-anicezio/
