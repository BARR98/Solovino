const { response } = require("express");


//CARGAMOS EL MODELO DE DATOS
const Adopcion = require('../models/adopcion.model');

const adopcionController = {};

//Obtener todos las adopciones
adopcionController.getAdopciones = async(req, res) => {
    const adopcion = await Adopcion.find();
    res.json(adopcion);

}


//CREAR UN post
adopcionController.createAdopcion = async(req, res) => {
    //el objeto request.body, contiene la información del docente a crear
    //console.log(req.body); 
    //res.json("Recibido");
    const adopcion = new Adopcion({
        nombre_mascota: req.body.nombre_mascota,
        edad_mascota: req.body.edad_mascota,
        aclaraciones: req.body.aclaraciones,
        sexo_mascota: req.body.sexo_mascota,
        esterilizacion: req.body.esterilizacion,
        raza: req.body.raza,
        imagen_mascota: req.body.imagen_mascota,

    });
    await adopcion.save();
    res.json({
        'status': 'Adopcion guardado',
        "enviado": adopcion
    })

}


//ACTUALIZAR UNA ADOPCION
adopcionController.updateAdopcion = async(req, res) => {
    const { id } = req.params;
    const adopcion = {
        nombre_mascota: req.body.nombre_mascota,
        edad_mascota: req.body.edad_mascota,
        aclaraciones: req.body.aclaraciones,
        sexo_mascota: req.body.sexo_mascota,
        esterilizacion: req.body.esterilizacion,
        raza: req.body.raza,
        imagen_mascota: req.body.imagen_mascota,
    };
    await Adopcion.findByIdAndUpdate(id, { $set: adopcion }, { new: true });
    res.json({
        status: 'adopcion actualizado correctamente'
    })
}

//CONSULTAR UNA ADOPCION
adopcionController.getAdopcion = async(req, res) => {
    //obtener el id de la peticion
    //el objeto re.params contiene el id que se va a enviar
    //console.log(req.params);
    //res.json(Recibido);
    const adopcion = await Adopcion.findById(req.params.id);
    res.json(adopcion);
}

//ELIMINAR UNA ADOPCION
adopcionController.deleteAdopcion = async(req, res) => {
    const { id } = req.params;
    await Adopcion.findByIdAndDelete(id);
    res.json({
        status: 'adopcion eliminado correctamente'
    })
}

//EXPORTAMOS ADOPCION CONTROLLER
module.exports = adopcionController;