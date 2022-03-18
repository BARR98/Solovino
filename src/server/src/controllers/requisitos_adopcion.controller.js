const { response } = require("express");


//CARGAMOS EL MODELO DE DATOS
const Requisito = require('../models/requisitos_adopcion.model');

const requisitoController = {};

//Obtener todos las requisitoes
requisitoController.getRequisitos = async(req, res) => {
    const requisito = await Requisito.find();
    res.json(requisito);

}


//CREAR REQUISITOS
requisitoController.createRequisito = async(req, res) => {
    //el objeto request.body, contiene la información del docente a crear
    //console.log(req.body); 
    //res.json("Recibido");
    const requisito = new Requisito({
        requisitos: req.body.requisitos
    });
    await requisito.save();
    res.json({
        'status': 'requisito guardado',
        "enviado": requisito
    })

}


//ACTUALIZAR UNA requisito
requisitoController.updateRequisito = async(req, res) => {
    const { id } = req.params;
    const requisito = {
        requisitos: req.body.requisitos
    };
    await Requisito.findByIdAndUpdate(id, { $set: requisito }, { new: true });
    res.json({
        status: 'requisito actualizado correctamente'
    })
}

//CONSULTAR UNA requisito
requisitoController.getRequisito = async(req, res) => {
    //obtener el id de la peticion
    //el objeto re.params contiene el id que se va a enviar
    //console.log(req.params);
    //res.json(Recibido);
    const requisito = await Requisito.findById(req.params.id);
    res.json(requisito);
}

//ELIMINAR UNA requisito
requisitoController.deleteRequisito = async(req, res) => {
    const { id } = req.params;
    await Requisito.findByIdAndDelete(id);
    res.json({
        status: 'requisito eliminado correctamente'
    })
}

//EXPORTAMOS requisito CONTROLLER
module.exports = requisitoController;