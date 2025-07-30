import { where } from "sequelize";
import { User } from "../modals/userModal.js";
const JwtSecreat="bookingByAkshat"
import jwt from 'jsonwebtoken'
const userController = {
  create: async (req, res) => {
    try {
      const { role,name, email, password } = req.body;
      console.log("userDetaile",name, email, password)
      const newUser = await User.create({ name, email, password });
      const payload={
        userId:newUser.userId,
        role:role

      }
      const token=jwt.sign(payload,JwtSecreat,expiresIn='1h')
      res.status(201).json({success:true,token:token});
    } catch(error) {
      console.error("Error creating user:", error);
      res.status(500).json({ error: error.message});
    }
  },
  Login: async (req, res) => {
    try {
      const {  email, password } = req.body;
      console.log("userDetaile", email, password)
      const user= await User.findOne({where:{email:email}});
      console.log("userishere",user)
      if(!user){
        return res.status(404).json({success:false,message:"user not found "})
      }
      if(user?.password.toString()===password.toString() && user?.email===email){
        const payload={
          userId:user?.userId,
          role:user?.role
  
        }
        const token=jwt?.sign(payload,JwtSecreat,{ expiresIn: '1h' })
        return res.status(200).json({success:true,token:token});

      }else{
        return res.status(401).json({success:false,message:"wrong password or user"});
      }
      
    } catch(error) {
      console.error("Error loggin in user:", error);
      return res.status(500).json({ error: error.message});
    }
  },
  geAllUsers: async (req, res) => {
    try {
      const users = await User.findAll({where:{userId:req.user}});
      res.status(200).json({success:true,message:"user fetched success" ,data:users});
    } catch (error) {
      console.error("Error fetching users:", error);
      res.status(500).json({ error: "Failed to fetch users" });
    }
  },
};

export default userController;
