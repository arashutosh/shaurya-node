let routes= {}
const express = require('express');
const loadRoutes = express();

routes.blog = require('./BlogRoute')
loadRoutes.use('/api', routes.blog)

module.exports = loadRoutes;