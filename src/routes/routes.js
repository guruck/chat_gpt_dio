const express = require("express")
const promptControler=require("../controllers/prompt-controller")

const routes = express.Router()

routes.post('/api/v1/prompt',promptControler.sendText)

module.exports = routes