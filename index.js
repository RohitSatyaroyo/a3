const express=require('express')
const cors=require('cors')
const http=require('http')
const app=express()

app.use(express.json())
app.use(cors())
const mongoose=require('mongoose')

const {Server}=require('socket.io')
const server=http.createServer(app)
const io=new Server(server,{
  cors:{
     origin:["http://localhost:5173"],
     methods:["GET","POST"]
  },
})

io.on("connection",(socket)=>{
    socket.on('msges',(data)=>{
        const {to,message}=data
        console.log(to,message)
        io.emit(to,message)
    })
})




const userRouter=require('./Routes/userRoutes')


app.use('/api/auth',userRouter)

app.get('/',async(req,res)=>{
  res.json('hi')
})

mongoose.set("strictQuery",false)
mongoose.connect('mongodb+srv://admin:12345@royoapi.3qmdrjq.mongodb.net/?retryWrites=true&w=majority').then(()=>{
    console.log('database connected')
  server.listen(8089,()=>console.log('running'))
})
