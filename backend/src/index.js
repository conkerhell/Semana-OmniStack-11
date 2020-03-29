/** Rotas e Recursos *
 * 
 * Metodo GET buscar/Listar uma informação no back-end
 * POST: Criar uma informação no back-end
 * PUT: ALterar informação no back-end
 * DELTE: deletar informação no back-end
 *
 */

/**
 * Tipos de parâmetros:
 * 
 * Query params: parâmetros nomeados enviados na rota após o "?" (Filtros e paginação)
 * 
 * Router params: Parâmetros utiliozados para identificar recursos
 * 
 * Request Body: É o corpo da requisição utilizado para criar ou alterar recursos
 */

/**
 *  Bancos de dados: SQL, Oracle, SQLlite, Mysql, Microsoft Sql Server
 */

const express = require('express');
const routes = require('./routes');


const app = express();

app.use(express.json());
app.use(routes);




app.listen(3333);

