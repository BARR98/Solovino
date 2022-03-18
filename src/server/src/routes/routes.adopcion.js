const express = require('express');
const router = express.Router();

//INCLUIR EL CONTROLADOR 
const adopciones = require('../controllers/adopcion.controller');
//Definir la ruta principal de la aplicacion 

//OBTENER TODOS LOS adopciones
router.get('/', adopciones.getAdopciones);


//Crear un Adopcion
router.post('/', adopciones.createAdopcion);

//obtener Adopcion
router.get('/:id', adopciones.getAdopcion);

//actualizar Adopcion
router.put('/:id', adopciones.updateAdopcion);

//eliminar adopcion
router.delete('/:id', adopciones.deleteAdopcion);

//exportar modulos
module.exports = router;