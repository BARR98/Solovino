const mongoose = require('mongoose');

const { Schema } = mongoose;
const BancAcountSchema = new Schema({
    titular: String,
    numero_cuenta: String,
    banco: String,
    numero_tarjeta: String
});

module.exports = mongoose.model('BancAcount', BancAcountSchema);