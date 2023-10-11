const router = require('express').Router();
const {User} = require('../../models');
const userController = require('../../controllers/UserController.js');
const bcrypt = require('bcryptjs');



//api/user
router.get('/', async (req, res)=>{
    const user = await User.findAll();
    res.status(200).json(user);
});

//api/user/register
 router.post('/register', async(req, res)=>{
    //Al ser el metodo asincrono necesito el hashSync para no ponerle la await
    req.body.password = bcrypt.hashSync(req.body.password, 10);

    //Aplicar es siguiente modelo 
    const user = await User.create(red.body);

    //El .json es el parseo o validacion del registro
    res.status(200).json(user);
 });


//api/user/login
router.post('/login', userController.login);


module.exports = router;
