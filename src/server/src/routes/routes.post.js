const express = require('express');
const router = express.Router();

//INCLUIR EL CONTROLADOR 
const posts = require('../controllers/post.controller');
//Definir la ruta principal de la aplicacion 

//OBTENER TODOS LOS posts
router.get('/', posts.getPosts);


//Crear un post
router.post('/', posts.createPost);

//obtener post
router.get('/:id', posts.getPost);

//actualizar post
router.put('/:id', posts.updatePost);

//eliminar maestria
router.delete('/:id', posts.deletePost);

//exportar modulos
module.exports = router;