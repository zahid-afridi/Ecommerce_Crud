import UserModel from "../models/User.js"
import bycript from 'bcryptjs'


const Register=async(req,res)=>{
    try {
          const {userName,email,password}=req.body
          if (!userName || !email || !password) {
            return res.status(303).json({success:true,message:" All faild are required"})
          }
          const ExiteingUser= await UserModel.findOne({email})
          if (ExiteingUser) {
            return res.status(303).json({success: true, message: "User already exists"});

            
          }
          const hasePassword= await bycript.hashSync(password,10)
           const NewUser= new UserModel({
            userName,email,password:hasePassword
           })
           await NewUser.save()
           res.status(200).json({success:true,message:"User Register Successfully",user:NewUser})
    } catch (error) {
        console.log(error)
        return res.status(500).json({success:true,message:" Internal server error"})
        
        
    }
}
const Login=async(req,res)=>{
    try {
          const {email,password}=req.body
          if (!email || !password) {
            return res.status(303).json({success:true,message:" All faild are required"})
            
          }
          const FindeUser=await UserModel.findOne({email})
           if (!FindeUser) {
            return res.status(404).json({success:false,message:" User Not Found"})
            
           }
           const CheckPassword=await bycript.compare(password,FindeUser.password)
           if (!CheckPassword) {
            return res.status(404).json({success:true,message:" Invalid Password"})
            
           }
          
           res.status(200).json({success:true,message:"user login successfully",user:FindeUser})
    } catch (error) {
        console.log(error)
        return res.status(500).json({success:true,message:" Internal server error"})
    }
}


export {Register,Login}