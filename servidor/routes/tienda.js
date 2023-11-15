// Rutas tienda
const express = require('express');
const router = express.Router();
const tiendaController = require('../controllers/tiendaController');
const pdfController = require('../controllers/pdfController');

// api/tiendas
router.post('/', tiendaController.crearTienda);
router.get('/', tiendaController.obtenerTiendas);
router.put('/:id', tiendaController.actualizarTienda);
router.get('/:id', tiendaController.verTienda);
router.delete('/:id', tiendaController.eliminarTienda);
//router.get('/pdf', pdfController.generarPDF);

module.exports = router;
