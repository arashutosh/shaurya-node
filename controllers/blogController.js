const blog = require("../models/blog")

const createBlog = async(req, res) => {
    try{
        const requestBody= req.body;
        console.log("------------>>>>>>>>>>>>>>",requestBody);
        const savedBlog = await blog.create(requestBody);
        console.log("this is the saved blog in db >>>>>>>>>>>>>>>",savedBlog);
        res.status(201).json("blog is posted successfully");
    } catch(err){
        console.log(err)
        res.status(500).json("internal server error")
    }
}

module.exports = {
    createBlog
}