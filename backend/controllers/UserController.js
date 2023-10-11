const models = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


exports.login = async(req, res, next)=>{
try{ 
    const user = await models.user.findOne({where: {email:req.body.email}});

    if (user){
        const passwordIsValid = bcrypt.compareSync(req.body.password, user.password); 

        if(passwordIsValid){
            //token firma, carga y 
            const token = jwt.sign({
                id:user.id,
                username:user.username,
                userlastname:user.userlastname,
                email:user.email,

            }, 'config.secret',{
            expiresIn: 86400, //Duracion del token, 1 dia

        });
        res.status(200).send({
            auth: true,
            tokenReturn: token,
            user: user
        });

    }else{
        res.status(401).json({
            error:'Error en el usuario o contraseña'
        });

    }
}else{
    res.status(404).json({
        error:'Error en el ususario o contraseña'
    });
}

}catch (error){
    res.status(500).send({
        message: 'Error->'
    });
    next(error);

}

};
//NOTA: INSTALAR NPM I JSONWEBTOKEN



//api/user/register
//exports.register = async(req, res)=>{
    //Al ser el metodo asincrono necesito el hashSync para no ponerle la await
  //  req.body.password = bcrypt.hashSync(req.body.password, 10);

    //Aplicar es siguiente modelo 
    //const user = await User.create(red.body);

    //El .json es el parseo o validacion del registro
    //res.status(200).json(user);
 //};



