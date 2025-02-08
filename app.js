const express = require("express")
require("dotenv").config()
const cors = require("cors")
const sequelize = require("./src/config/dbConnect")
const Roles = require("./src/models/roles")
const User = require("./src/models/user")

const app = express()

app.use(cors())
app.use(express.json())


app.listen(process.env.PORT || 3001,async ()=>{
    try{
      console.log(`server is running on ${process.env.PORT}`)
      // db connection
      await sequelize.authenticate()
      console.log('Connection has been established successfully.');
      await Roles.sync({force:true})
      await User.sync({force:true})
    }catch(error){
     console.log("error", error.message)
    }
})