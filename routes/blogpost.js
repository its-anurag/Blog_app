const knex = require("../config/db")
const { generateToken } = require('../auth/auth')

const CreateBlogUser = async (req, res) => {
    await knex.select("*").from("user").where({ email: req.body.email }).then((data) => {
        if (data.length < 1) {
            knex("user").insert(req.body).then((data) => {
                res.send("data inserted successfully")
            }).catch((errors) => {
                res.send(errors.message)
            })
        } else {
            res.send("data already exist")
        }
    })
}

const LoginBlogUser = async (req, res) => {
    await knex.select("*").from("user").where({ email: req.body.email, password: req.body.password }).then((data) => {
        const token = generateToken(data[0].id)
        res.cookie("token", token)
        res.json({ message: 'Login successfull...', LoginUser: data })
    }).catch((err) => {
        res.json({ message: err.message })
    })
}

const blogPosts = async (req, res) => {
    try {
        await knex("blogPosts").insert(req.body)
        res.send("post uploaded successfully...")
    } catch (error) {
        res.json({ error: error.message })
        console.log(error.message);
    }
}

const likeDislikeUser = async(req,res)=>{
    try {
        await knex('likeDislike').insert({user_ID:req.body.user_ID,like:req.body.like,Dislike:false})
        res.json({message:'like uploaded successfully'})
    } catch (error) {
        res.json({message:error.message})
    }
}


const SeeAllpost =async(req,res)=>{
    await knex.from("blogPosts").then((data)=>{
        res.send(data)
    }).catch((err)=>{
        res.send(err.message)
    })
}

const TotallikeDislike = async(req,res)=>{
    await knex.from("likeDislike").then((data)=>{
        res.send(data)
    }).catch((err)=>{
        res.send(err.message)
    })
}


module.exports = {
    CreateBlogUser,
    LoginBlogUser,
    blogPosts,
    likeDislikeUser,
    TotallikeDislike,
    SeeAllpost
}
