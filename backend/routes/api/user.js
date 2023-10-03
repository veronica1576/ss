const router = require('express').Router();
const {User} = require('../../models');



//api/user
app.get('/', async (req, res)=>{
    const user = await User.findAll();
    res.status(200).json(user);
});

//api/user/register



//api/user/login





module.exports = router;
