const { response } = require("express");


//CARGAMOS EL MODELO DE DATOS
const Posts = require('../models/posts.model');

const postController = {};

//Obtener todos los Posts
postController.getPosts = async(req, res) => {
    const posts = await Posts.find();
    res.json(posts);

}


//CREAR UN post
postController.createPost = async(req, res) => {
    //el objeto request.body, contiene la información del docente a crear
    //console.log(req.body); 
    //res.json("Recibido");
    const post = new Posts({
        nombre_dueño: req.body.nombre_dueño,
        nombre_mascota: req.body.nombre_mascota,
        descripcion_mascota: req.body.descripcion_mascota,
        edad_mascota: req.body.edad_mascota,
        imagen_mascota: req.body.imagen_mascota,
        sexo_mascota: req.body.sexo_mascota,
        talla_mascota: req.body.talla_mascota,
        raza_mascota: req.body.raza_mascota,
        fecha_desaparicion: req.body.fecha_desaparicion,
        lugar_desaparicion: req.body.lugar_desaparicion,
        telefono: req.body.telefono


    });
    await post.save();
    res.json({
        'status': 'Post guardado',
        "enviado": post
    })

}


//ACTUALIZAR UN post
postController.updatePost = async(req, res) => {
    const { id } = req.params;
    const post = {
        nombre_dueño: req.body.nombre_dueño,
        nombre_mascota: req.body.nombre_mascota,
        descripcion_mascota: req.body.descripcion_mascota,
        edad_mascota: req.body.edad_mascota,
        imagen_mascota: req.body.imagen_mascota,
        sexo_mascota: req.body.sexo_mascota,
        talla_mascota: req.body.talla_mascota,
        raza_mascota: req.body.raza_mascota,
        fecha_desaparicion: req.body.fecha_desaparicion,
        lugar_desaparicion: req.body.lugar_desaparicion,
        telefono: req.body.telefono
    };
    await Posts.findByIdAndUpdate(id, { $set: post }, { new: true });
    res.json({
        status: 'post actualizado correctamente'
    })
}

//Consultar un post
postController.getPost = async(req, res) => {
    //obtener el id de la peticion
    //el objeto re.params contiene el id que se va a enviar
    //console.log(req.params);
    //res.json(Recibido);
    const post = await Posts.findById(req.params.id);
    res.json(post);
}

//ELIMINAR UNE post
postController.deletePost = async(req, res) => {
    const { id } = req.params;
    await Posts.findByIdAndDelete(id);
    res.json({
        status: 'post eliminado correctamente'
    })
}

//exportamos emleados.controller
module.exports = postController;