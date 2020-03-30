const express = require('express');
const routes = express.Router();
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');


/** Rota para listar todas as Ongs */
routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

/** Rota para criar casos */
routes.post('/incidents', IncidentController.create);
routes.get('/incidents', IncidentController.index);

/**Rota para deletar casos */
routes.delete('/incidents/:id',IncidentController.delete);

/** Rota Listar os casos */
routes.get('/profile',ProfileController.index);  


/** Rota de login */
routes.post('/sessions', SessionController.create);


module.exports = routes;