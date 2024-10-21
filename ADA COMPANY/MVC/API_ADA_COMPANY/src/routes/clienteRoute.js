const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');

const clienteController = require('../controllers/clienteController');

router.get('/cliente', clienteController.getClientes); // Apenas clientes autenticados podem ver a lista
router.post('/cliente', clienteController.create); // Apenas clientes autenticados podem criar
router.put('/cliente/:id', clienteController.updateCliente);
router.delete('/cliente/:id', clienteController.deleteCliente);
router.get('/cliente/:id', clienteController.details);

module.exports = router;
