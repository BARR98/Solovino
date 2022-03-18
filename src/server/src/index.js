const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

//Conectar a la base de datos
const { mongoose } = require('./database/database');


//configueraciones
app.set('port', process.env.PORT || 3000)

//middelware
app.use(morgan('dev')); //ESCUCHAR CAMBIOS DEL SERVIDOR, SOLO DESARROLLO
app.use(express.json()); //OBTENER LOS DATOS DEL USUARIO EN REQUEST.BODY
app.use(cors()); //PERMITE COMUNICACION DESDE FUERA DEL SERVIDOR

//rutas del servidor
app.use('/api/huellitas/posts', require('./routes/routes.post'));
app.use('/api/huellitas/adopciones', require('./routes/routes.adopcion'));
app.use('/api/huellitas/requisitos-adopcion', require('./routes/routes.requisitos_adopcion'));
app.use('/api/huellitas/cuentas-banco', require('./routes/routes.banc_acount'));
app.use('/api/huellitas/sobre-nosotros', require('./routes/routes.sobre_nosotrs'));


//iniicar el servidor
app.listen(app.get('port'), () => {
    console.log("Servidor corriendo en el puerto" + app.get('port'));
});