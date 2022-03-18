const mongoose = require('mongoose');

const { Schema } = mongoose;
const RequisitosSchema = new Schema({
    requisitos: []
});

module.exports = mongoose.model('Requisitos', RequisitosSchema);