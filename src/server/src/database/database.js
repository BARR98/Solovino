const mongoose = require('mongoose');

//configuracion de los parametros de la base de datos
url = 'mongodb://localhost/huellitas';
dbparams = {

    useNewUrlParser: true,
    family: 4, // Use IPv4, skip trying IPv6
    useUnifiedTopology: true
};

mongoose.connect(url, dbparams)
    .then(db => console.log('BD esta conectada'))
    .catch(err => console.log(err));
module.exports = mongoose;