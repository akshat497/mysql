import userController from "../controllers/userController.js";
import express from "express"
const router = express.Router();
//usercontrollers
router.post('/create',userController.create)
router.get('/get',userController.geAllUsers)
export default router