const mongoose = require('mongoose');

const { Schema } = mongoose;
const SobreNosotrosSchema = new Schema({
    informacion: String
});

module.exports = mongoose.model('SobreNosotros', SobreNosotrosSchema);