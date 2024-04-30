const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
require("dotenv").config();


// MongoDB Compass Connection
// const dburl = "mongodb://localhost:27017/studentpro04"

const dburl = process.env.mongodburl
mongoose.connect(dburl).then(() => {
     console.log("Connetced to DB Successfully")
}).catch((e) => {
    console.log(e.message)
});



const app = express() 
app.use(express.json())   // to parse JSON data
app.use(cors())  // to enable the data

const adminrouter = require("./routes/adminroutes")
const facultyrouter = require("./routes/facultyroutes")
const studentrouter = require("./routes/studentroutes")



app.use("",adminrouter)  // it includes admin routes
app.use("",facultyrouter)  // it includes faculty routes
app.use("",studentrouter) // it includes student routes
 



// const port=2527
const port = process.env.PORT  
app.listen(port,()=>{
    console.log(`Server is running at port ${port}`)
})