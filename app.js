const express = require('express');
const dotenv = require('dotenv').config();
const app = express();
const loadRoutes = require('./routes')

const conn = require('./db/conn')


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(loadRoutes)

app.use('*', (req, res, next) => {
    console.log('Please provide currect url')
    res.status(404).send('please provide currect url')
    next()
})


const HOST = process.env.HOST
const PORT = process.env.PORT

app.listen(PORT, HOST, async () => {
    console.log(`App listening on ${HOST}:${PORT}`);
})