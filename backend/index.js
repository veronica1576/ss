
const express = require('express');

//
const morgan = require('morgan');

//Me llama la carpeta de las rutas
const apiRoutes = require('./routes');

//instancia de express en mi app
const app = express();


//middleware morgan para detectar peticiones
app.use(morgan('dev'));


//primera ruta
app.use('/api', apiRoutes);


//Server
app.set('PORT', 3000)

app.listen(app.get('PORT'), ()=>{
    console.log('server up');
});




