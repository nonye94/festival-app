const mongoose=require("mongoose");


const FestivalSchema=new mongoose.Schema({

    name:{
        type:String,
        required:true
    },

    location:String,

    date:String,

    description:String,

    image:String

});


module.exports =
mongoose.model(
"Festival",
FestivalSchema
);