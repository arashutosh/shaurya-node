let routes= {}
const express = require('express');
const loadRoutes = express();

routes.blog = require('./BlogRoute')
routes.forum = require('./discussionRouter')
loadRoutes.use('/api', routes.blog)
loadRoutes.use('/api', routes.forum)

module.exports = loadRoutes;