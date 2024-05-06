const express = require('express')
const app = express()
const morgan=require("morgan")
var bodyParser = require("body-parser")
const cors=require("cors")
const route=require("./router")
const db=require("./config/db")
const port = 3000

//connect db
db.connect()

//lấy được dữ liệu qua post và giới hạn 50mb
app.use(bodyParser.json({limit:"50mb"}));

//http logger
app.use(morgan('combined'))

//chặn
app.use(cors())

route(app)

app.listen(port, () => {
    console.log(`sever running port ${port}`)
})