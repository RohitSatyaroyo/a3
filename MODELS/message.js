const mongoose=require('mongoose')

const messageSchema=mongoose.Schema({

    message:{
        type:String,
            required:true
    },
    users:Array,
    Sender:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"SignUp",
        required:true
    }
},{
    timestamps:true
})
const messageModel=mongoose.model("Message",messageSchema)
module.exports=messageModel