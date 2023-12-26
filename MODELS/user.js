const mongoose=require('mongoose')

const userModel=mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
        },
        password:{
            type:String,
            required:true
        },
        photo:{
            type:String,
            required:true,
            default:"https://icon-library.com/images/default-user-icon/default-user-icon-13.jpg"
        }
    },{
        timestamps:true
    }
)
const User=mongoose.model("User",userModel)
module.exports=User