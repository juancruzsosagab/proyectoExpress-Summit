const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/usersSummit"), {userNewUrlParser:true}, (error)=>{
    if(error){
        throw error;
    }else{
        console.log("Conectado!")
    }
}

module.exports = mongoose;