import { where } from "sequelize";
import { User } from "../modals/userModal.js";
import jwt from 'jsonwebtoken'
const JwtSecreat="bookingByAkshat"
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
  geAllUsers: async (req, res) => {
    try {
      const token= req.headers['authorization']?.split(' ')[1];
      const response=jwt.verify(token,JwtSecreat);
      if(response){
       
      }else{
        res.status(401).json({success:false,message:"forbidded"})
      }
      const users = await User.findAll();
      res.status(200).json({success:true,message:"user fetched success" ,data:users});
    } catch (error) {
      console.error("Error fetching users:", error);
      res.status(500).json({ error: "Failed to fetch users" });
    }
  },
};

export default userController;
