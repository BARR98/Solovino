const { response } = require("express");


//CARGAMOS EL MODELO DE DATOS
const BancAcount = require('../models/banc_acount.model');

const bancAcountController = {};

//OBTENER TODAS LAS CUENTAS
bancAcountController.getAcounts = async(req, res) => {
    const cuentas = await BancAcount.find();
    res.json(cuentas);

}


//CREAR UNA CUENTA
bancAcountController.createAcount = async(req, res) => {
    //el objeto request.body, contiene la información del docente a crear
    //console.log(req.body); 
    //res.json("Recibido");
    const cuenta = new BancAcount({
        titular: req.body.titular,
        numero_cuenta: req.body.numero_cuenta,
        banco: req.body.banco,
        numero_tarjeta: req.body.numero_tarjeta

    });
    await cuenta.save();
    res.json({
        'status': 'Cuenta guardado',
        "enviado": cuenta
    })

}


//ACTUALIZAR UNA CUENTA
bancAcountController.updateAcount = async(req, res) => {
    const { id } = req.params;
    const cuenta = {
        titular: req.body.titular,
        numero_cuenta: req.body.numero_cuenta,
        banco: req.body.banco,
        numero_tarjeta: req.body.numero_tarjeta
    };
    await BancAcount.findByIdAndUpdate(id, { $set: cuenta }, { new: true });
    res.json({
        status: 'cuenta actualizada correctamente'
    })
}

//CONSULTAR UNA CUENTA
bancAcountController.getAcount = async(req, res) => {
    //obtener el id de la peticion
    //el objeto re.params contiene el id que se va a enviar
    //console.log(req.params);
    //res.json(Recibido);
    const cuenta = await BancAcount.findById(req.params.id);
    res.json(cuenta);
}

//ELIMINAR UNA CUENTA
bancAcountController.deleteAcount = async(req, res) => {
    const { id } = req.params;
    await BancAcount.findByIdAndDelete(id);
    res.json({
        status: 'cuenta eliminado correctamente'
    })
}

//EXPORTAMOS ADOPCION CONTROLLER
module.exports = bancAcountController;