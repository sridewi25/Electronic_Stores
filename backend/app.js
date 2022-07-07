require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const cors = require('cors')
const multer = require('multer')

const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'../frontend_user/src/file_image')
    },
    filename:function(req,file,cb){
        cb(null,'--'+ file.originalname)
    } 
})
const upload = multer({storage:storage})

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.post("/single",upload.single("image"),(req, res) => {
   console.log(req.file.filename)
})
const routes = require('./routes')
app.use(routes)

app.listen(port, () => {
    console.log(`App is listening on ${port}`)
})

