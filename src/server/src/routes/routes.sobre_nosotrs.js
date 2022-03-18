const express = require('express');
const router = express.Router();

//INCLUIR EL CONTROLADOR 
const info = require('../controllers/sobre_nosotros.controller');
//Definir la ruta principal de la aplicacion 

//OBTENER TODA LA INFORMACIÓN
router.get('/', info.getInfo);


//CREAR INFORMACIÓN
router.post('/', info.createInfo);



//ACTUALIZAR INFORMACIÓN
router.put('/:id', info.updateInfo);

//ELIMINAR INFORMACIÓN
router.delete('/:id', info.deleteInfo);

//exportar modulos
module.exports = router;