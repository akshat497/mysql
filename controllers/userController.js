import { where } from "sequelize";
import { User } from "../modals/userModal.js";

const userController = {
  create: async (req, res) => {
    try {
      const { username, email, password } = req.body;
      const newUser = await User.create({ username, email, password });
      res.status(201).json(newUser);
    } catch {
      console.error("Error creating user:", error);
      res.status(500).json({ error: "Failed to create user" });
    }
  },
  geAllUsers: async (req, res) => {
    try {
      const users = await User.findAll();
      res.status(200).json({success:true,message:"user fetched success" ,data:users});
    } catch (error) {
      console.error("Error fetching users:", error);
      res.status(500).json({ error: "Failed to fetch users" });
    }
  },
};

export default userController;
