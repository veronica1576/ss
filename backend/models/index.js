
const Sequelize = require('sequelize');
const UserModel = require('./user.js');
const bcrypt = require('bcryptjs');

const sequelize = new Sequelize('railway', 'postgres', 'LQg9eoaqGR8HFlQuA3q9', {
    host: 'containers-us-west-125.railway.app',
    port: '6180',
    dialect: 'postgres'
});

const User = UserModel(sequelize, Sequelize);

//sequelize.sync({force: false}) -> nos ayuda a sincronizar las tablas

sequelize.sync({force: false})
    .then(()=>{
        console.log('Tablas sincronizadas');
    });


module.exports = {
    User,
}

//INSTALACIONES: 

//https://www.npmjs.com/package/bcryptjs => npm i bcryptjs ->> en consola para encriptar. se debe ejecutar dentro de la carpeta backend.

//https://www.npmjs.com/package/body-parser ->  npm i body-parser 

//npm i --save pg pg-hstore

