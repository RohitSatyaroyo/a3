const userModel=require('../MODELS/register')
const messageModel=require('../MODELS/message')
const bcrypt=require('bcrypt')
const express=require('express')

const app=express()


const test=async(req,res)=>{
    res.send('hello')
}

const registeruser=async(req,res)=>{
    const {name,email,password}=req.body
    // const hashedpassword=await bcrypt.hash(password,10)
    const user=await userModel.create({name,email,password})
    res.json(user)

}
const authuser=async(req,res)=>{
    
    const user=await userModel.findOne(req.body)
    if(user){
       
      
        res.json({message:'s',userdetails:user})
        console.log(user)
      
        
    }
    else{
        res.json({message:'f'})
    }
}

const getAllUser=async(req,res)=>{
    const user=await userModel.find({_id:{$ne:req.params.id}}).select([
        "email", "name"
    ])
    res.json(user)

}
const sendmsg=async(req,res)=>{

    const {message,from,to}=req.body
    const data=await messageModel.create({
        message:message,users:[from,to],Sender:from
    })
    // console.log(data)
    res.json({message:'s'})
  
  
}

const getmsg=async(req,res)=>{
   
    const{from,to}=req.body
    const message=await messageModel.find({
        users:{
            $all:[from,to]
        }
    }).sort({updatedAt:1})

    const promessage=message.map((m)=>{
        return{
             fromSelf:m.Sender.toString()===from,
             message:m.message
        }
    })
    res.json(promessage)
  

}


module.exports={registeruser,authuser,getAllUser,sendmsg,getmsg,test}