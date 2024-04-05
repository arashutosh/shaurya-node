const chat = require("../models/chat");
const dicsussion = require("../models/chat")

const creatediscussion = async(req, res) => {
    try{
        const requestBody= req.body;
        console.log("------------>>>>>>>>>>>>>>",requestBody);
        const savedBlog = await chat.create(requestBody);
        console.log("this is the saved discussion in db >>>>>>>>>>>>>>>",savedBlog);
        res.status(201).json("discussionis posted successfully");
    } catch(err){
        console.log(err)
        res.status(500).json("internal server error")
    }
}

const getAllDiscussions = async (req, res) => {
    try {
        const discussions = await chat.find();
        res.status(200).json({ discussions });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
};


module.exports = {
    creatediscussion,
    getAllDiscussions
}