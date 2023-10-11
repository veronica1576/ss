
const mongoose = require('mongoose');
const UserModel = require('./users.js');
const FilmModel = require('./films.js');


//MongoDB Connection
const DB_URL = "mongodb://mongo:LnDIWjXANDZm1tZDXOeT@containers-us-west-108.railway.app:7457";


const mongoConnection = mongoose.connect(DB_URL, {
    keepAlive: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
},


    //(e)=>{
    //    if(e){
    //        console.error('DB: ERROR !!');

    //    }else{
    //        console.log('Conexion Correcta !!');
    //    }
    //}

);

//Evento de conexion exitosa
mongoose.connection.on('connected', () => {
    console.log('Conexion exitosa a la base de datos MongoDB');
});

//Evento error de conexion
mongoose.connection.on('error', (err)=>{
    console.error('Error de conexion a MongoDB:', Eerr)
});

//Evento de desconexion
mongoose.connection.on('disconnected', ()=>{
    console.log('Desconectado d ela base de datos MongoDB');
});

const User = UserModel;
const Film = FilmModel;


module.exports = {
    //Exportar el modelo
    User,
    Film,
}

//INSTALACIONES: 

//https://www.npmjs.com/package/bcryptjs => npm i bcryptjs ->> en consola para encriptar. se debe ejecutar dentro de la carpeta backend.

//https://www.npmjs.com/package/body-parser ->  npm i body-parser 

//npm i --save pg pg-hstore

