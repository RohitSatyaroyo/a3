const express=require('express')
const userController=require('../Controller/UserController')
const router=express.Router()

router.post('/reg',userController.registeruser)

router.post('/login',userController.authuser)

router.get('/getAllUser/:id',userController.getAllUser)

router.post('/sendmsg',userController.sendmsg)

router.post('/getmsg',userController.getmsg)

router.get('/',userController.test)

module.exports=router
