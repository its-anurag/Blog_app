const express = require('express');
const { authenticateToken } = require('../auth/auth');
const Router = express.Router();
// const {authenticateToken} = require('../auth/auth')
const UserCtrl = require('../routes/blogpost');

Router.post('/CreateBlogUser',UserCtrl.CreateBlogUser)

Router.post('/LoginBlogUser',UserCtrl.LoginBlogUser)

Router.post('/blogPosts',authenticateToken,UserCtrl.blogPosts)

Router.post('/likeUser',authenticateToken,UserCtrl.likeDislikeUser)
Router.get("/totalreaction",UserCtrl.TotallikeDislike)
Router.get("/allpost",UserCtrl.SeeAllpost)

module.exports = Router