const mongoose = require('mongoose');

const { Schema } = mongoose;
const AdopcionSchema = new Schema({
    nombre_mascota: String,
    edad_mascota: String,
    aclaraciones: String,
    sexo_mascota: String,
    esterilizacion: String,
    raza: String,
    imagen: String
});

module.exports = mongoose.model('Adopcion', AdopcionSchema);