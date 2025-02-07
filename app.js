const express = require("express")
require("dotenv").config()
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())


app.listen(process.env.PORT || 3001,()=>{
    try{
      console.log(`server is running on ${process.env.PORT}`)
    }catch(error){
     console.log("error", error.message)
    }
})