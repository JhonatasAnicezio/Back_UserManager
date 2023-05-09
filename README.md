# Projeto Back User Manager
[![NPM](https://img.shields.io/bower/l/api)](https://github.com/JhonatasAnicezio/Back_UserManager/blob/main/LICENSE)

### Olá seja bem vindo ao Back User Manager!

Este é um projeto simples de gerenciamento de usuários em uma API RESTful desenvolvido em TypeScript utilizando o Sequelize ORM e MySQL como banco de dados. A arquitetura adotada foi a MSC (Model-Service-Controller), onde as responsabilidades foram divididas em módulos distintos, tornando o projeto organizado e escalável.

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
### Com docker
Se ainda não tiver o docker em sua maquina, e quiser rodar o projeto com ele de uma olhada na documentação: https://docs.docker.com/compose/

```bash
# em seu arquivo raiz execute o comando docker-compose up
docker-compose up -d

# em seguida entre dentro do container app_backend e execute o comando db:reset
docker exec -it app_backend sh

npm run db:reset

# e por fim executar o projeto
npm start
```

Se estiver ultilizando yarn:

```bash
# instalar dependências
yarn install

# executar o projeto
yarn start
```
Se estiver ultilizando npm:

```bash
# instalar dependências
npm install

# executar o projeto
npm start
```
# Autor

Jhonatas Anicezio Segismundo

https://www.linkedin.com/in/jhonatas-anicezio/
