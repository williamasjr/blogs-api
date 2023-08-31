# Blogs API!

<br />



  Nesse projeto foi desenvolvido uma API e um banco de dados para a produção de conteúdo para um blog! 

  Uma aplicação  `Node.js` usando `sequelize` para fazer um `CRUD` de posts.

<br />


  <summary><strong>🐋 Rodando no Docker vs Localmente</strong></summary>
  
  # Com Docker

  > :information_source: Rode os serviços `node` e `db` com o comando `docker-compose up -d --build`.


  - Esses serviços irão inicializar um container chamado `blogs_api` e outro chamado `blogs_api_db`;

  - A partir daqui você pode rodar o container `blogs_api` via CLI ou abri-lo no VS Code;

  > :information_source: Use o comando `docker exec -it blogs_api bash`.

  - Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.
  

  <br />
  
  # Sem Docker

  > :information_source: Instale as dependências [**Caso existam**] com `npm install`


### Endpoints

# endpoint POST `/user`

# endpoint GET `/user`

# endpoint GET `/user/:id`

# endpoint POST `/categories`

# endpoint GET `/categories`

# endpoint POST `/post`

# endpoint GET `/post`

# endpoint GET `/post/:id`

# endpoint PUT `/post/:id`

# endpoint DELETE `/post/:id`

# endpoint DELETE `/user/me`

# endpoint GET `/post/search?q=:searchTerm`

