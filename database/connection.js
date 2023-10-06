const mongoose =  require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

mongoose.connect(process.env.DATABASE_URL).then(()=>{
   console.log("Connected to database")
}).catch(()=>{
   console.log("Connection Unsuccessfull")
})