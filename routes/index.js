let routes= {}
const express = require('express');
const loadRoutes = express();

routes.blog = require('./BlogRoute')
routes.forum = require('./discussionRouter')
routes.user = require("./userRoute")
loadRoutes.use('/api', routes.blog)
loadRoutes.use('/api', routes.forum)
loadRoutes.use('/api', routes.user)

module.exports = loadRoutes;