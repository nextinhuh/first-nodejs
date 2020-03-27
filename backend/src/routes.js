const express = require('express');

const OngController = require('./controllers/OngController'); //estancia arquivo do controller
const IncidentController = require('./controllers/IncidentController'); //estancia arquivo do controller
const ProfileController = require('./controllers/ProfileController'); //estancia arquivo do controller
const SessionController = require('./controllers/SessionController'); //estancia arquivo do controller

const routes = express.Router(); //ESTANCIA O ARQUIVO DE ROTAS

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);//LISTA TODAS AS ONGS CADASTRADAS
routes.post('/ongs', OngController.create);//CADASTRA NOVA ONG

routes.get('/incidents', IncidentController.index);//LISTA TODOS OS CASOS CADASTRADOS
routes.post('/incidents', IncidentController.create);//CADASTRA NOVO CASO
routes.delete('/incidents/:id', IncidentController.delete);//DELETA UM CASO PELO ID

routes.get('/profile', ProfileController.index);//LISTA OS CASOS DE UMA ONG ESPECÍFICA

module.exports = routes;