const mongoose=require('mongoose')

const register=mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    }
},{
    timestamps:true
}
)
const registermodel=mongoose.model('SignUp',register)
module.exports=registermodel
