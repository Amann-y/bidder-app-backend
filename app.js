const express = require("express")
require("dotenv").config()
const cors = require("cors")
const sequelize = require("./src/config/dbConnect")

const app = express()

app.use(cors())
app.use(express.json())


app.listen(process.env.PORT || 3001,async ()=>{
    try{
      console.log(`server is running on ${process.env.PORT}`)
      // db connection
      await sequelize.authenticate()
      console.log('Connection has been established successfully.');
    }catch(error){
     console.log("error", error.message)
    }
})