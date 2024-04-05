const blog = require("../models/blog")

const createBlog = async(req, res) => {
    try{
        const requestBody= req.body;
        await blog.create(requestBody);
        res.status(201).json("blog is posted successfully");
    } catch(err){
        console.log(err)
        res.status(500).json("internal server error")
    }
}

const getAllBlog = async (req, res) => {
    try {
        const allBlogs = await blog.find();
        res.status(200).json(allBlogs);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = {
    createBlog,
    getAllBlog
}