const mongoose = require("mongoose");


mongoose.connect("mongodb://localhost/"+process.env.MONGODB_DATABASE), {userNewUrlParser:true}, (error)=>{
    if(error){
        throw error;
    }else{
        console.log("Conectado!")
    }
}

module.exports = mongoose;