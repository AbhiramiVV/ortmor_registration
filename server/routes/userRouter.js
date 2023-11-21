import express from 'express'
import { departData, userRegister } from '../controllers/userController.js'



const router=express.Router()

router.post('/register',userRegister)

router.get('/departmentData',departData)

export default router