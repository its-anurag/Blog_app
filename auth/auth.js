const jwt =require("jsonwebtoken")
const knex = require('../config/db');

const generateToken=((id)=>{
    const token=jwt.sign({id:id},'kskdkdkffksfkm')
    return token
})

const authenticateToken = async(req, res, next)=>{
    if (req.headers.cookie){
        let token = req.headers.cookie.split("=")[1]
        const token_data = jwt.verify(token,'kskdkdkffksfkm')
        res.tokendata = token_data
        return next();
    }
    return res.send({'status': 'error', 'message': 'invalid auth.'})
}


module.exports={generateToken,authenticateToken}