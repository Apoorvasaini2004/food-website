const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://apoorvasainimitrc2020:Appu1234@cluster0.p2ek9xb.mongodb.net/food-factory",{
  
}).then(()=>{
    console.log("successfully connected to mongodb")
}).catch((e)=>{
    console.log(e)
})


