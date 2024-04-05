const mongoose = require('mongoose');
const dotenv = require('dotenv').config({ path: './.env' })

const db = process.env.DB;


mongoose.connect(db, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to database');
}).catch(err => console.log('Error connecting', err))

