const express = require('express');
const router = express.Router();

//INCLUIR EL CONTROLADOR 
const cuentas = require('../controllers/banc_acount.controller');


//OBTENER TODAS LAS CUENTAS
router.get('/', cuentas.getAcounts);


//CREAR UNA CUENTA
router.post('/', cuentas.createAcount);

//OBTENER UNA CUENTA
router.get('/:id', cuentas.getAcount);

//ACTUALIZAR UNA CUENTA
router.put('/:id', cuentas.updateAcount);

//ELIMINAR UNA CUENTA
router.delete('/:id', cuentas.deleteAcount);

//exportar modulos
module.exports = router;