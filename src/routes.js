const { Router }  = require('express');
const EquipmentController = require('./app/controllers/EquipmentController');
const routes = Router();

routes.get('/equipment', EquipmentController.index);
routes.get('/equipment/:id', EquipmentController.search);
routes.post('/equipment', EquipmentController.store);
routes.put('/equipment', EquipmentController.update);
routes.delete('/equipment', EquipmentController.delete);


module.exports = routes;