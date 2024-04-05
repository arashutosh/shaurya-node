const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const bcryptjs = require("bcryptjs");
const user = require("../models/user");
const {
    resServerError,
    resFound,
    resDocCreated,
    resDocUpdated,
    resDocDeleted,
    resNotFound,
    resDuplicateEmail,
    resUnauthorized,
    resSuccess
} = require("../utils/response");
const User = require('../models/user');



const signUpUser = async (req, res) => {
    try {
        const requestBody = req.body;
        const { password } = req.body;
        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);
        requestBody.password = hashedPassword;
        const doc = await user.create(requestBody);
        return resDocCreated(res, doc);
    } catch (error) {
        console.error(error);
        return resServerError(res, error);
    }
};



const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const abc = req.body;
        const user = await User.findOne({email});
        if (!user) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }
        const isPasswordMatch = await bcryptjs.compare(password, user.password);
        if (!isPasswordMatch) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }
    return resSuccess(res);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};


module.exports = {
    signUpUser,
    loginUser
}