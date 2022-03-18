const { response } = require("express");


//CARGAMOS EL MODELO DE DATOS
const Info = require('../models/sobre_nostros.model');

const sobreNosotrosController = {};

//OBTENER LA INFORMACIÓN
sobreNosotrosController.getInfo = async(req, res) => {
    const info = await Info.find();
    res.json(info);

}


//CREAR REQUISITOS
sobreNosotrosController.createInfo = async(req, res) => {
    //el objeto request.body, contiene la información del docente a crear
    //console.log(req.body); 
    //res.json("Recibido");
    const info = new Info({
        informacion: req.body.informacion
    });
    await info.save();
    res.json({
        'status': 'informacion guardada',
        "enviado": info
    })

}


//ACTUALIZAR INFORMACION
sobreNosotrosController.updateInfo = async(req, res) => {
    const { id } = req.params;
    const info = {
        informacion: req.body.informacion
    };
    await Info.findByIdAndUpdate(id, { $set: info }, { new: true });
    res.json({
        status: 'informacion actualizada correctamente'
    })
}



//ELIMINAR INFORMACIÓN
sobreNosotrosController.deleteInfo = async(req, res) => {
    const { id } = req.params;
    await Info.findByIdAndDelete(id);
    res.json({
        status: 'información eliminado correctamente'
    })
}

//EXPORTAMOS requisito CONTROLLER
module.exports = sobreNosotrosController;