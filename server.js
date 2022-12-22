const express = require("express")
const app = express()
const port = 5000
const Router = require('./Router/router')

app.use(express.json())

app.use('/',Router)

app.listen(port,()=>{
    console.log(`server connectin on http://localhost:${port}`)
})