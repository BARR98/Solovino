const express = require('express');
const router = express.Router();

//INCLUIR EL CONTROLADOR 
const requisitos = require('../controllers/requisitos_adopcion.controller');
//Definir la ruta principal de la aplicacion 

//OBTENER TODOS LOS requisitos
router.get('/', requisitos.getRequisitos);


//Crear un Requisito
router.post('/', requisitos.createRequisito);

//obtener Requisito
router.get('/:id', requisitos.getRequisito);

//actualizar Requisito
router.put('/:id', requisitos.updateRequisito);

//eliminar Requisito
router.delete('/:id', requisitos.deleteRequisito);

//exportar modulos
module.exports = router;